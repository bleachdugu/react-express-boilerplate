import React, { Component } from 'react'
import Parallax from 'Components/Parallax'
import { Birds } from 'Components/ThreeJs'

import './style.scss'

export default class App extends Component {
  render() {
    const {images} = this.props;
    return (
      <div>
        <h1>Boilerplate</h1>
        <p className="description">Express and Webpack Three.js Boilerplate App</p>
        <Birds />
        <Parallax images={images}/>
      </div>
    )
  }
}
