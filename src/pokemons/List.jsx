import React from 'react';
import { Link } from 'react-router-dom';
import './list.scss';

// TODO: should be moved to shared if will be used in another place
export default (ItemComponent) => ({ data }) => 
  <div className="pokemons-list">
    {
      data.pokemons.map((item, ind) => (
        <Link to={`/pokemons/${item.id}`} className="list-item" key={ind}>
          <ItemComponent data={item}/> 
        </Link>
      ))
    }
  </div>