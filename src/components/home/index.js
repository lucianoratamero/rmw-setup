
import React, { Component } from 'react';


export default class Home extends Component {
  render() {
    return (
      <h1>{JSON.stringify(this.props)}</h1>
    );
  }
}
