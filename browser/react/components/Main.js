import React, { Component } from 'react';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import StatefulAlbums from './StatefulAlbums';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import { HashRouter as Router, Route } from 'react-router-dom';

export default class Main extends Component {

  constructor ( props ) {

    super( props );

  }

  selectAlbum ( albumId ) {
    axios.get(`/api/albums/${ albumId }`)
      .then( res => res.data )
      .then( album => this.setState ({
        selectedAlbum: album
      }));
  }

  deselectAlbum () {
    this.setState({ selectedAlbum: {}});
  }

  render () {
    return (
      <Router>
      <div id="main" className="container-fluid">
        
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10">
          <Route exact path='/' component={StatefulAlbums} />
          <Route exact path='/albums' component={StatefulAlbums} />
          <Route path='/albums/:albumId' component={SingleAlbum} />
          <Route exact path='/artists' component={AllArtists} />
          <Route path='/artists/:artistId' component={SingleArtist} />
        </div>
        <Player />
      </div>
      </Router>
    );
  }
}






























/* this.state.selectedAlbum.id ?
          <SingleAlbum album={this.state.selectedAlbum} /> :
          <AllAlbums albums={this.state.albums} selectAlbum={this.selectAlbum} /> */
        