import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { extractItems } from './helpers';

export default ({ gql, gqlOpts, children }) => {
  const { loading, error, data } = useQuery(gql, gqlOpts)
  console.log('from list', loading, data)
  if (loading && !data) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const items = extractItems(data);

  return items.map((item, index) => (
    <React.Fragment key={index}>
      { children(item) }
    </React.Fragment>
  ));
}
