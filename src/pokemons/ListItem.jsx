import React from 'react';
import './list-item.scss';

export default ({ data }) => {
  return <div className="pokemons-list-item">
    <img src={data.image} className="image" alt={data.name}/>
    <div className="number">{data.number}</div>
    <div className="name">{data.name}</div>
  </div>
}