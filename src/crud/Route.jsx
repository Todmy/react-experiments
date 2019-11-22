import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default ({ path }) => (
  <Switch>
    <Route exact path={path} component={() => <div>crud list</div>} />
    <Route exact path={`${path}/:id`} component={() => <div>crud item</div>} />
  </Switch>
)