import {ApolloClient, InMemoryCache} from "@apollo/client";
import {GRAPHQL} from "../Constants";

const client = new ApolloClient({
    // uri: LOCALHOST_SERVER_URL + GRAPHQL,
    uri: GRAPHQL,
    cache: new InMemoryCache()
})

export default client