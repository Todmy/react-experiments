import React from 'react';
import { useQuery } from '@apollo/react-hooks';

function extractItems(data) {
  const hasSingleQuery = Object.keys(data).length === 1;

  if (!hasSingleQuery && !data.item) {
    throw new Error(`Make sure that query expects list of 'items'`)
  }

  return Object.values(data)[0]
}

export default ({ gql, gqlOpts, children }) => {
  const { loading, error, data } = useQuery(gql, gqlOpts);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data)

  const item = extractItems(data);

  return (
    <React.Fragment>
      { children(item) }
    </React.Fragment>
  );
}
