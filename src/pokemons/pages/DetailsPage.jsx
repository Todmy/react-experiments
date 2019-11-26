import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import flow from 'lodash.flow';

import QuerySwitch from '@/shared/QuerySwitch';
import Loading from '@/shared/Loading';
import ErrorNotifier from '@/shared/ErrorNotifier';

import Details from '../components/Details';

import './details-page.scss';

const POKEMON = gql`
  query Pokemon($id: String!) {
    pokemon(id: $id) {
      id
      name
      image
      number
      types
      resistant
      weaknesses
    }
  }
`;

const flattify = (data) => ({ ...data, data: data.data.pokemon })

export default () => {
  const { id } = useParams();

  return (
    <div className="pokemons-details-page">
      <div className="navigation">
        <Link to="/pokemons">&lt; Back</Link>
      </div>
      <Query query={POKEMON} variables={{ id }} returnPartialData>
        {
          flow([
            flattify, 
            (data) => 
              <QuerySwitch
                data={data}
                loading={<Loading />}
                error={<ErrorNotifier />}
                success={<Details />}
              />,
          ])
        }
      </Query>
    </div>
  )
}
