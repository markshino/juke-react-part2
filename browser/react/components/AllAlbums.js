import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AllAlbums extends Component {

  render () {
    const albums = this.props.albums;
    const selectAlbum = this.props.selectAlbum;
  
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {
          albums && albums.map( album => (
            <div className="col-xs-4 album" key={ album.id }>
              <Link to={ `/albums/${album.id}` }>
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}

