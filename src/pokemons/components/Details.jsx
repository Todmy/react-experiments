import React from 'react';
import BadgesSet from '@/shared/BadgesSet';

export default ({ data, short = true }) => (
  <div className="pokemons-details">
    <img src={data.image} className="image" alt={data.name}/>
    <div className="number">{data.number}</div>
    <div className="name">{data.name}</div>

    { 
      short 
      && 
      <>
        <BadgesSet set={data.types} label="types" />
        <BadgesSet set={data.resistant} label="resistant" />
        <BadgesSet set={data.weaknesses} label="weaknesses" />
      </>
    }
  </div>
);
