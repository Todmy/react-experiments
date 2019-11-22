import React from 'react';
import { Link } from 'react-router-dom';

// TODO: should be moved to shared if will be used in another place
export default (ItemComponent) => ({ data }) => data.pokemons.map((item, ind) => (
  <Link to={`/pokemons/${item.id}`} key={ind}>
    <ItemComponent data={item}/> 
  </Link>
))