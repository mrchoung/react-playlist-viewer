import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import App from "./App"
import Artists from "Artists"
import Artist from "Artist"

export default class Routes extends Component {

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <Route path="artists" component={Artists}/>
            <Route path="artists/:id" component={Artist}/>
            <Route path="*" component={App}/>
          </Route>
        </Router>
      </div>
    )
  }
}
