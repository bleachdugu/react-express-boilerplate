import React, { Component } from 'react'
import './style.scss';
export default class Features extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className="card-list">
	
            <li className="card">
              <a className="card-image" href="https://michellezauner.bandcamp.com/album/psychopomp-2" target="_blank" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-100.jpg);'}} data-image-full="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-500.jpg">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/psychopomp-100.jpg" alt="Psychopomp" />
              </a>
              <a className="card-description" href="https://michellezauner.bandcamp.com/album/psychopomp-2" target="_blank">
                <h2>Psychopomp</h2>
                <p>Japanese Breakfast</p>
              </a>
            </li>
	
            <li className="card">
              <a className="card-image" href="https://inlovewithaghost.bandcamp.com/album/lets-go" target="_blank" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-100.jpg);'}} data-image-full="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-500.jpg">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/lets-go-100.jpg" alt="let's go" />
              </a>
              <a className="card-description" href="https://inlovewithaghost.bandcamp.com/album/lets-go" target="_blank">
                <h2>let's go</h2>
                <p>In Love With A Ghost</p>
              </a>
            </li>
	
            <li className="card">
              <a className="card-image" href="https://vulfpeck.bandcamp.com/album/the-beautiful-game" target="_blank" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-100.jpg);'}} data-image-full="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-500.jpg">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/beautiful-game-100.jpg" alt="The Beautiful Game" />
              </a>
              <a className="card-description" href="https://vulfpeck.bandcamp.com/album/the-beautiful-game" target="_blank">
                <h2>The Beautiful Game</h2>
                <p>Vulfpeck</p>
              </a>
            </li>
	
            <li className="card">
              <a className="card-image" href="https://convergecult.bandcamp.com/album/jane-doe" target="_blank" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-100.jpg);'}} data-image-full="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-500.jpg">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/310408/jane-doe-100.jpg" alt="Jane Doe" />
              </a>
              <a className="card-description" href="https://convergecult.bandcamp.com/album/jane-doe" target="_blank">
                <h2>Jane Doe</h2>
                <p>Converge</p>
              </a>
            </li>
	
          </ul>
        </div>
      </div>
    )
  }
}
