import React, { Component } from 'react'
import {Link, Route, Switch, HashRouter} from 'react-router-dom'
import Parallax from 'Components/Parallax'
import { Birds } from 'Components/ThreeJs'
import Features from 'Containers/FeaturesContainer'

import './style.scss'
import styles from './style.module.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    const {images} = this.props;
    return (
      <div>
        <HashRouter>
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
              <Route path="/portfolio">
                <Birds />
              </Route>
            </Switch>
          </div>
        </HashRouter>
      </div>
    )
  }
}
