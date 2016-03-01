import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import { get as getArtist } from "app/reducers/artist"

@connect(
    (state) => ({
        artist : state.artist
    }),
    (dispatch) => ({
        getArtist : (value) => dispatch(getArtists(value)),
    })
)

export default class Artist extends Component {

  static propTypes = {
      params: PropTypes.shape({
        artistId:PropTypes.string,
      }),
      artist : PropTypes.object,
      getArtist : PropTypes.func,
  };

  static defaultProps = {
      params: {},
      artist : null,
      getArtist : () => {}
  };
  componentDidMount(){
      const {
        params,
        getArtist,
      } = this.props

      if(params.artistId) getArtist(params.artistId)
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getArtist,
    } = this.props

    if(nextProps.params.artistId!=params.artistId){
      getArtist(nextProps.params.artistId)
    }
  }


  render() {
    return(
    	<div>

    	</div>
    )
  }
}


export default Artist;
