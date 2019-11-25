import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import QuerySwitch from '@/shared/QuerySwitch';
import Loading from '@/shared/Loading';
import ErrorNotifier from '@/shared/ErrorNotifier';

import List from '../components/List';
import Details from '../components/Details';

import './list-page.scss';

const POKEMONS = gql`
  query Pokemons($limit: Int!) {
    pokemons(first: $limit) {
      id
      name
      image
      number
    }
  }
`;

export default () => 
  <div className="pokemons-list-page">
    <h2 className="heading">Pokemons</h2>
    <Query query={POKEMONS} variables={{ limit: 25 }} displayName="LoadAllPokemons">
      {
        (data) => 
          <QuerySwitch
            data={data}
            loading={<Loading />}
            error={<ErrorNotifier />}
            success={
              <List>
                <Details short={true} />
              </List>
            }
          />
      }
    </Query>
  </div>