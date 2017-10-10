import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';
import { Link } from 'react-router-dom';
import AllAlbums from './AllAlbums';

export default class SingleArtist extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            artist:{},
            albums:[],
            songs:[]
        }
    }

    componentDidMount () {
        const artistId = this.props.match.params.artistId;
        const name = axios.get( `/api/artists/${artistId}` ).then(res => res.data);
        const albums = axios.get( `/api/artists/${artistId}/albums` ).then(res => res.data);
        const songs = axios.get( `/api/artists/${artistId}/songs` ).then(res => res.data);
        
        Promise.all([name, albums, songs])
        .then( ([artist, albums, songs]) => {
            this.setState({
                artist,
                albums,
                songs
            });
        })
        
    }

  render () {

    const {artist, albums, songs} = this.state;

    return (
        <div>
            <h3>{ artist.name }</h3>
            <ul className="nav nav-tabs">
            <li><Link to = { `/albums/${artist.id}` }>ALBUMS</Link></li>
            <li><Link to={ `/songs/${artist.id}` }>SONGS</Link></li>
            </ul>
        </div>
    )
  }
}