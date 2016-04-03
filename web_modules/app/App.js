import React, { Component, PropTypes } from 'react';
import Header from "Header";
import styles from "./styles.css"

export default class App extends Component {
  static propTypes = {
      children: PropTypes.node,
  };

  static defaultProps = {
      children: {},
  };

  render() {
    return (
        <div className={styles.container}>
        <Header/>
        Bonjour ceci est un site sur le cinéma
             {this.props.children}
        </div>
    )
  }
}
