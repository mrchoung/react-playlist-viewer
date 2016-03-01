import React, { Component, PropTypes } from 'react';

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
             Super site 
             {this.props.children}
        </div>
    )
  }
}
