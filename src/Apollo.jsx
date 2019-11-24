import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/graphql',
  cache: new InMemoryCache({
    cacheRedirects: {
      Query: {
        pokemon: (_, args, { getCacheKey }) => getCacheKey({ __typename: 'Pokemon', id: args.id })
      },
    },
  }),
});

export default props => 
  <ApolloProvider client={client}>
    { props.children }
  </ApolloProvider>
  