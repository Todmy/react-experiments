import React from 'react';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';

import { List as DataList } from '@/crud';

import { default as PokemonItem } from './ListItem'

const POKEMONS = gql`
  {
    items: pokemons(first: 4) {
      id
      name
      image
    }
    pokemon(name: "Bulbasaur") {
      id
    }
  }
`;

export default () => (
  <React.Fragment>
    <h2>List of Items</h2>
    <DataList gql={POKEMONS}>
      { (item) => (
        <Link to={`/pokemons/${item.id}`}>
          <PokemonItem data={item}/> 
        </Link>
      )}
    </DataList>
  </React.Fragment>
)