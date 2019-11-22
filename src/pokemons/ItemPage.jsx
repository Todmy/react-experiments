import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Item as DataItem } from '@/crud';

const POKEMON = gql`
  query Pokemon($id: String!) {
    item: pokemon(id: $id) {
      id
      name
      image
      number
      types
      resistant
      weaknesses
    }
  }
`;

export default () => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <h2>Item</h2>
      <div>
        <Link to="/pokemons">Back</Link>
      </div>
      <DataItem gql={POKEMON} gqlOpts={{ variables: { id }, returnPartialData: true }}>
        { (item) => (
          <pre>{ JSON.stringify(item, null, 2) }</pre>
        )}
      </DataItem>
    </React.Fragment>
  )
}
