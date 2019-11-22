import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import QuerySwitch from '@/shared/QuerySwitch';
import Loading from '@/shared/Loading';
import ErrorNotifier from '@/shared/ErrorNotifier';

const POKEMON = gql`
  query Pokemon($id: String!) {
    pokemon(id: $id) {
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

const Details = ({ data }) => <pre>{ JSON.stringify(data.pokemon, null, 2) }</pre>

export default () => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <h2>Item</h2>
      <div>
        <Link to="/pokemons">Back</Link>
      </div>
      <Query query={POKEMON} variables={{ id }} returnPartialData>
        { 
          QuerySwitch({
            loading: Loading,
            error: ErrorNotifier,
            data: Details,
          }) 
        }
      </Query>
    </React.Fragment>
  )
}
