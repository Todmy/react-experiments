import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { extractItems } from './helpers';

export default ({ gql, gqlOpts, children }) => {
  const { loading, error, data } = useQuery(gql, gqlOpts);
  console.log('from item', loading, data)
  if (error) return `Error! ${error.message}`;
  if (loading && (!data || !Object.keys(data).length)) return 'Loading...';

  const item = extractItems(data);

  return (
    <React.Fragment>
      { children(item) }
    </React.Fragment>
  );
}
