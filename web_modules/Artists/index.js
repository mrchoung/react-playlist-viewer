import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux";
import fetchJSON from "app/fetchJSON";
import consts from "app/consts";
import GridListExampleSimple from "Grid";

import { get as getArtists } from "app/reducers/artists";

@connect(
    (state) => ({
        artists : state.artists
    }),
    (dispatch) => ({
        getArtists : () => dispatch(getArtists()),
    })
)

export default class Artists extends Component {

  static defaultProps = {
    artists : null,
    getArtists : () => {}
  };

  static propTypes = {
    artists : PropTypes.object,
    getArtists : PropTypes.func,
  };

  onArtistsLoad = () => {
    this.props.getArtists()
  };

  selectArtist = (item) => {
      this.context.router.push(`/artists/${item.id}`)
  };

  render() {
      return (
        <div>
          {this.onArtistsLoad}
        </div>
      )
  }
}


export default Artists;
