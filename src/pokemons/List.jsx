import React from 'react';

import { List } from '@/crud';

import { default as PokemonItem } from './ListItem'

const getPokemokemons = () => {
  return Promise.resolve([
    {
      "id": "UG9rZW1vbjowMDE=",
      "name": "Bulbasaur",
      "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDI=",
      "name": "Ivysaur",
      "image": "https://img.pokemondb.net/artwork/ivysaur.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDM=",
      "name": "Venusaur",
      "image": "https://img.pokemondb.net/artwork/venusaur.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDQ=",
      "name": "Charmander",
      "image": "https://img.pokemondb.net/artwork/charmander.jpg"
    }
  ]);
}

export default () => (
  <List
    query={getPokemokemons}
  >
    { (item) => <PokemonItem data={item}/> }
  </List>
)