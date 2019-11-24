import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListPage from './pages/ListPage';
import ItemPage from './pages/DetailsPage';

export default ({ path }) => (
  <Switch>
    <Route exact path={path} component={ListPage} />
    <Route exact path={`${path}/:id`} component={ItemPage} />
  </Switch>
)