import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange()}
      >
    );
  }
}


export default Input;