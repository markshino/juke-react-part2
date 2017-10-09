import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleArtist extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            selectedArtist: {}
        }
    }

    componentDidMount () {
        const artistId = this.props.match.params.artistId;
        
        Promise.all(
            [
                (axios.get( `/api/artists/${artistId}` )),
                (axios.get( `/api/artists/${artistId}/albums` )),
                (axios.get( `/api/artists/${artistId}/songs` ))            
            ]
        )
        .then( res => res.data )
        .then( artists => {
          this.setState({ artists })
        });
        
        
    }

  render () {


    const artist = this.state.selectedArtist;
    const artistAlbums = this.state.selectedArtist.artistAlbums;
    const artistSongs = this.state.selectedArtist.artistSongs;
    console.log('HERE', artist);
    return (

        <div>
            <h3>{ artist.name }</h3>
            {/* <h4>{ artist. }</h4> 
            <h4>{  }</h4> */}
        </div>
    )
  }
}  