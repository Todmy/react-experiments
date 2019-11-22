import React from 'react';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

import QuerySwitch from '@/shared/QuerySwitch';
import Loading from '@/shared/Loading';
import ErrorNotifier from '@/shared/ErrorNotifier';

import PokemonItem from './ListItem'

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

const List = ({ data }) => data.pokemons.map((item, ind) => (
  <Link to={`/pokemons/${item.id}`} key={ind}>
    <PokemonItem data={item}/> 
  </Link>
))

export default () => (
  <React.Fragment>
    <h2>List of Items</h2>
    <Query query={POKEMONS} variables={{ limit: 4 }}>
      { 
        QuerySwitch({
          loading: Loading,
          error: ErrorNotifier,
          data: List,
        }) 
      }
    </Query>
  </React.Fragment>
)