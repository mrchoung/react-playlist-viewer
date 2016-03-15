import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

window.__DEVTOOLS__ = !(process.env.NODE_ENV === 'production');
import { combineReducers } from "redux"
import { Provider } from "react-redux"
import createStore from "app/redux/createStore"
import * as reducers from "app/reducers"

const store = createStore(combineReducers(reducers))

import App from "./App"
import Artists from "Artists"
import Artist from "Artist"


import DevTools from "app/redux/createDevTools"

let devtools = null
if (__DEVTOOLS__) {
    devtools = (
      <DevTools store={store}/>
    )
}

export default class Routes extends Component {

  render() {
    return (
      <div>
       <Provider store={ store }>
          <Router history={browserHistory}>
            <Route path="/" component={App}>
              <Route path="artists" component={Artists}/>
              <Route path="artists/:id" component={Artist}/>
              <Route path="*" component={App}/>
            </Route>
          </Router>
        </Provider>
        { __DEVTOOLS__ && devtools }
      </div>
    )
  }
}
