import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `https://graphql-pokeapi.graphcdn.app/`
});
const client = new ApolloClient({
  cache,
  link
});

export default client;
