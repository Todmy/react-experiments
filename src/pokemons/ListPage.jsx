import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import QuerySwitch from '@/shared/QuerySwitch';
import Loading from '@/shared/Loading';
import ErrorNotifier from '@/shared/ErrorNotifier';

import List from './List';
import PokemonItem from './ListItem';

const POKEMONS = gql`
  query Pokemons($limit: Int!) {
    pokemons(first: $limit) {
      id
      name
      image
      number
    }
  }
`;

export default () => (
  <React.Fragment>
    <h2>List of Items</h2>
    <Query query={POKEMONS} variables={{ limit: 4 }}>
      { 
        QuerySwitch({
          loading: Loading,
          error: ErrorNotifier,
          data: List(PokemonItem),
        }) 
      }
    </Query>
  </React.Fragment>
)