import '../styles/main.scss'
import type {AppProps} from 'next/app'
import {store} from '../store'
import {Provider} from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/apolloClient'

function MyApp({Component, pageProps}: AppProps) {
	const apolloClient = useApollo(pageProps)
	return (
		<Provider store={store}>
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		</Provider>
	)
}

export default MyApp
