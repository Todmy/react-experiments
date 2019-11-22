import React from 'react';

export default ({ data }) => <pre>{ JSON.stringify(data.pokemon, null, 2) }</pre>;
