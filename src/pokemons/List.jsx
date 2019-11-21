import React from 'react';
import { gql } from 'apollo-boost';

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
  <DataList gql={POKEMONS}>
    { (item) => <PokemonItem data={item}/> }
  </DataList>
)