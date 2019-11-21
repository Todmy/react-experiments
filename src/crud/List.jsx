import React from 'react';

export default class List extends React.Component {
  constructor(props){
    super(props);
    this.query = props.query

    this.state = {
        items : [],
    };
  }

  async componentWillMount() {
    this.setState({
      items: await this.query(),
    })
  }

  render() {
    return this.state.items.map((item, index) => (
      <React.Fragment key={index}>
        { this.props.children(item) }
      </React.Fragment>
    ));
  }
}