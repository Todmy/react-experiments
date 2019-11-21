import React from 'react';

import { List } from '@/crud';

import { default as PokemonItem } from './ListItem'

export default (props) => <List>
  <PokemonItem/>
</List>