import {useMemo} from 'react'
import {ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: process.env.BACKEND || `https://backend.ecdevstudio.com/graphql`,
		}),
		cache: new InMemoryCache(),
	})
}

export function initializeApollo(initialState = null) {
	const _apolloClient = apolloClient ?? createApolloClient()
	if (initialState) {
		const existingCache = _apolloClient.extract()
		const data = merge(existingCache, initialState, {
			arrayMerge: (destinationArray, sourceArray) => [
				...sourceArray,
				...destinationArray.filter((d) =>
					sourceArray.every((s) => !isEqual(d, s))
				),
			],
		})
		_apolloClient.cache.restore(data)
	}
	if (typeof window === 'undefined') return _apolloClient
	if (!apolloClient) apolloClient = _apolloClient
	return _apolloClient
}

export function addApolloState(client: { cache: { extract: () => any } }, pageProps: { props: { [x: string]: any } }) {
	if (pageProps?.props) {
		pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
	}

	return pageProps
}

export function useApollo(pageProps: { [x: string]: any }) {
	const state = pageProps[APOLLO_STATE_PROP_NAME]
	return useMemo(() => initializeApollo(state), [state])
}