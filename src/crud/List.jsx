import React from 'react';

const getPokemokemons = () => {
  return Promise.resolve([
    {
      "id": "UG9rZW1vbjowMDE=",
      "name": "Bulbasaur",
      "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDI=",
      "name": "Ivysaur",
      "image": "https://img.pokemondb.net/artwork/ivysaur.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDM=",
      "name": "Venusaur",
      "image": "https://img.pokemondb.net/artwork/venusaur.jpg"
    },
    {
      "id": "UG9rZW1vbjowMDQ=",
      "name": "Charmander",
      "image": "https://img.pokemondb.net/artwork/charmander.jpg"
    }
  ]);
}

export default class List extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        items : [],
    };
  }

  async componentWillMount() {
    this.setState({
      items: await getPokemokemons(),
    })
  }

  render() {
    console.log('----', this)
    return this.state.items.map(item => <div>{ this.props.children }</div>)
  }
}