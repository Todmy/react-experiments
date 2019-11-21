import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListPage from './ListPage';
import ItemPage from './ItemPage';

export default () => (
  <Switch>
    <Route exact path="/pokemons" component={ListPage} />
    <Route exact path="/pokemons/:id" component={ItemPage} />
  </Switch>
)