import React, { Component } from 'react'
import './style.scss';
export default class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const bandSet = [
      {
        url: 'https://michellezauner.bandcamp.com/album/psychopomp-2',
        href: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-100.jpg")'
      },{
        url: 'https://inlovewithaghost.bandcamp.com/album/lets-go',
        href: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-100.jpg")'
      },{
        url: 'https://vulfpeck.bandcamp.com/album/the-beautiful-game',
        href: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-100.jpg")'
      },{
        url: 'https://convergecult.bandcamp.com/album/jane-doe',
        href: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-100.jpg")'
      },
    ];
   
    return (
      <div>
        <div>
          <ul className="card-list">
            {
              bandSet.map(data => (
                <li key={data.url} className="card">
                  <a className="card-image" href={data.url}
                    target="_blank"
                    style={{ backgroundImage: data.href }}>
                  </a>
                  <a className="card-description" href={data.url} target="_blank">
                    <h2>Psychopomp</h2>
                    <p>Japanese Breakfast</p>
                  </a>
                </li>
              ) )
            }
          </ul>
        </div>
      </div>
    )
  }
}
