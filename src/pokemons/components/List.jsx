import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer';

const LOAD_PACK = 25;

// TODO: should be moved to shared if will be used in another place
const List = ({ data, fetchMore, children: ItemComponent }) => {
  const [lastLoad, updateLastLoadState] = useState(false);
  const loadMoreData = () => {
    fetchMore({
      variables: { limit: data.pokemons.length + LOAD_PACK },
      updateQuery: (prev, { fetchMoreResult }) => {
        if ((fetchMoreResult.pokemons.length - prev.pokemons.length) < LOAD_PACK ) {
          updateLastLoadState(true);
        }
        return fetchMoreResult
      },
    })
    .catch(console.warn) // TODO: fix with https://github.com/apollographql/apollo-client/issues/4114
  }

  return (
    <div className="pokemons-list">
      {
        data.pokemons.map((item, ind) => 
          <Link to={`/pokemons/${item.id}`} className="list-item" key={ind}>
            { React.cloneElement(ItemComponent, { data: item}) } 
          </Link>
        )
      }

      { 
        data.pokemons.length && !lastLoad 
        && 
        <InView 
          as="div" 
          className="loader" 
          onChange={inView => inView ? loadMoreData() : null} 
        />
      }
    </div>
  )
}

List.displayName = 'List';

export default List;