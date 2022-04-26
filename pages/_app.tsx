import '../styles/main.scss'
import type {AppProps} from 'next/app'
import {store} from '../store'
import {Provider} from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/apolloClient'
import {useRouter} from "next/router";

function MyApp({Component, pageProps}: AppProps) {
	const apolloClient = useApollo(pageProps)
	const router = useRouter();
	const path = (/#!(\/.*)$/.exec(router.asPath) || [])[1];
	if (path) {
		router.replace(path);
	}
	return (
		<Provider store={store}>
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		</Provider>
	)
}

export default MyApp
