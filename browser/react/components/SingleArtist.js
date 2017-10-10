import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Songs from '../components/Songs';
import AllAlbums from './AllAlbums';

export default class SingleArtist extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            selectedArtist: {}
        }
    }

    componentDidMount () {
        const artistId = this.props.match.params.artistId;
        const name = axios.get( `/api/artists/${artistId}` ).then(res => res.data);
        const albums = axios.get( `/api/artists/${artistId}/albums` ).then(res => res.data);
        const songs = axios.get( `/api/artists/${artistId}/songs` ).then(res => res.data);
        
        Promise.all([name, albums, songs])
        .then( artistData => {
            this.setState({selectedArtist: artistData});
        })
        
    }

  render () {

    const artist = this.state.selectedArtist;

    return (
        <div>
            <h3>{artist.name}</h3>
            <AllAlbums albums={ artist[1] } />
            <Songs songs={ artist[2] }/>
        </div>
    )
  }
}  