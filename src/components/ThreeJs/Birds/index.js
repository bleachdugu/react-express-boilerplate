import React, { Component } from 'react'
import * as THREE from 'three'
import styles from './style.module.scss'

export default class Birds extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setClearColor(0x0000000, 0)
    renderer.setSize( width,  height);
    this.mount.appendChild( renderer.domElement );
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x2D112B } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    scene.background = new THREE.Color(0xFEDCC8)
    camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }
  render() {
    return (
      <div
        className={styles.birds_container}
        style={{ height: '400px' }}
        ref={(mount) => { this.mount = mount }}>
      </div>
    )
  }
}
