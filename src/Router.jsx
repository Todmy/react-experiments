import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import PokemonRoute from '@/pokemons/Route';

export default () => (
  <Router>
    <Switch>
      <PokemonRoute path="/pokemons" />
      
      <Redirect to="/pokemons" />
    </Switch>
  </Router>
);
