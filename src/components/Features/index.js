import React, { Component } from 'react'
import './style.scss';
export default class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearImage: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({clearImage: true})
    }, 1000);
  }

  render() {
    const { clearImage } = this.state;
    const bandSet = [
      {
        url: 'https://michellezauner.bandcamp.com/album/psychopomp-2',
        href: 'https://f4.bcbits.com/img/a3458975711_10.jpg'
      },{
        url: 'https://inlovewithaghost.bandcamp.com/album/lets-go',
        href: 'https://f4.bcbits.com/img/a2667576910_10.jpg'
      },{
        url: 'https://vulfpeck.bandcamp.com/album/the-beautiful-game',
        href: 'https://f4.bcbits.com/img/a1702319957_16.jpg'
      },{
        url: 'https://convergecult.bandcamp.com/album/jane-doe',
        href: 'https://f4.bcbits.com/img/a1637869310_16.jpg'
      },
    ];
   
    return (
      <div>
        <div>
          <ul className="card-list">
            {
              bandSet.map(data => (
                <li key={data.url} className="card">
                  <a className="card-image"
                    href={data.url}
                    style={clearImage ? {filter: 'none'} : {}}
                    target="_blank">
                    <img src={data.href} alt=""/>
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
