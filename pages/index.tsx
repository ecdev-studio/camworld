import type {NextPage} from 'next'
import {gql, useQuery} from '@apollo/client'
import Layout from "../components/Layout/Layout";

export const TEST_QUERY = gql`
    query {
        getCategories {
            id, slug
        }
    }
`

const Home: NextPage = () => {
	const {loading, error, data} = useQuery(TEST_QUERY)


	return (
		<Layout>

		</Layout>
	)
}

export default Home
