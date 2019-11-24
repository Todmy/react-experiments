import React from 'react';
import BadgesSet from '@/shared/BadgesSet';
import Loading from '@/shared/Loading';

export default ({ data, loading, short = true }) => 
  <div className="pokemons-details">
    <div style={{backgroundImage: `url(${data.image})`}} className="image image-container" alt={data.name}/>
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

    { 
      loading
      &&
      <Loading />
    }
  </div>
