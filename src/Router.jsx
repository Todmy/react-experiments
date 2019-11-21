import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const requireModule = require.context('@', true, /^\.\/[a-zA-Z0-9]+\/Routes\.jsx$/);
  
const Routes = requireModule.keys().reduce((acc, fileName) => {
  return acc.concat(requireModule(fileName).default);
}, []);

export default () => (
  <Router>
    { Routes.map((ModuleRoute, ind) => (
      <React.Fragment key={ind}>
        <ModuleRoute />
      </React.Fragment>
    )) }
  </Router>
);
