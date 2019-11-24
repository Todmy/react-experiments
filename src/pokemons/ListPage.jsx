import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import QuerySwitch from '@/shared/QuerySwitch';
import Loading from '@/shared/Loading';
import ErrorNotifier from '@/shared/ErrorNotifier';

import List from './List';
import Details from './Details';

import './list-page.scss';

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
  <div className="pokemons-list-page">
    <h2 className="heading">Pokemons</h2>
    <Query query={POKEMONS} variables={{ limit: 10 }}>
      { 
        QuerySwitch({
          loading: Loading,
          error: ErrorNotifier,
          data: List(Details),
        }) 
      }
    </Query>
  </div>
)