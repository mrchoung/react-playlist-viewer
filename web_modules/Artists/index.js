import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import { get as getArtists } from "app/reducers/artists"

@connect(
    (state) => ({
        artists : state.artists
    }),
    (dispatch) => ({
        getArtists : () => dispatch(getArtists()),
    })
)

export default class Artists extends Component {

  static propTypes = {
    artists : PropTypes.object,
    getArtists : PropTypes.func,
  };

  static defaultProps = {
    artists : null,
    getArtists : () => {}
  };


  render() {
    return(
    	<div>
        LISTE DES ARTISTES
    	</div>
    )
  }
}


export default Artists;
