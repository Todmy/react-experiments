import React from 'react';
import { useQuery } from '@apollo/react-hooks';

function extractItems(data) {
  const hasSingleQuery = Object.keys(data).length === 1;

  if (!hasSingleQuery && !data.items) {
    throw new Error(`Make sure that query expects list of 'items'`)
  }

  return Object.values(data)[0]
}

export default props => {
  const { loading, error, data } = useQuery(props.gql, props.gqlOpts)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const items = extractItems(data);

  return items.map((item, index) => (
    <React.Fragment key={index}>
      { props.children(item) }
    </React.Fragment>
  ));
}
