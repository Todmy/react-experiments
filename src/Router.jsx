import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Route as PokemonRoute } from '@/pokemons';
import { Route as CrudRoute } from '@/crud';

export default () => (
  <Router>
    <Switch>
      <PokemonRoute path="/pokemons" />
      <CrudRoute path="/crud" />
      <Redirect to="/pokemons" />
    </Switch>
  </Router>
);
