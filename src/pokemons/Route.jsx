import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ListPage from './ListPage';
import ItemPage from './ItemPage';

export default ({ path }) => (
  <Switch>
    <Route exact path={path} component={ListPage} />
    <Route exact path={`${path}/:id`} component={ItemPage} />
  </Switch>
)