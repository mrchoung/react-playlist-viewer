import React, { Component, PropTypes } from 'react';

import Home from "Home"

export default class App extends Component {
  static propTypes = {
      children: PropTypes.node,
  };

  static defaultProps = {
      children: {},
  };

  render() {
    return (
        <div>
            <Home />
             {this.props.children}
        </div>
    )
  }
}
