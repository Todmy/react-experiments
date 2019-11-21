import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/graphql',
});

export default props => (
  <ApolloProvider client={client}>
    { props.children }
  </ApolloProvider>
)