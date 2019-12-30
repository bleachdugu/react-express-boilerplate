import React, { Component } from 'react'
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Parallax from 'Components/Parallax'
import { Birds } from 'Components/ThreeJs'
import Features from 'Containers/FeaturesContainer'

import './style.scss'
import styles from './style.module.scss';

export default class App extends Component {
  render() {
    const {images} = this.props;
    return (
      <div>
        <Router>
          <div>
            <div className={styles.router_container}>
              <a><Link to="/">HOME</Link></a>
              <a><Link to="/features">FEATURES</Link></a>
              <a><Link to="/portfolio">PORTFOLIO</Link></a>
              <a><Link to="/about">ABOUT</Link></a>
              <a><Link to="/contact">CONTACT</Link></a>
            </div>
            <Switch>
              <Route exact path="/">
                <Birds />
                <Parallax images={images}/>
              </Route>
              <Route path="/features">
                <Features />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
