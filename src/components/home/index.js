
import React, { Component } from 'react';
import { Button, Colors } from 'react-foundation';


export default class Home extends Component {
  render() {
    return (
      <Button color={Colors.SUCCESS}>{JSON.stringify(this.props)}</Button>
    );
  }
}
