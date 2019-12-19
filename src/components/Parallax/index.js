import React, { Component } from 'react'
import classnames from 'classnames';
import styles from './style.module.scss';
// import './style.scss'
const images = [
  'p0', 'p1','p2','p3','p4','p5','p6'
];
const imageUrl = 'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_'
export default class Parallax extends Component {
  constructor(props) {
    super(props)

  }
    
  render() {
    return (
      <div className={styles.parallax}>
        {
          images.map((img, index) =>
            <div key={img} className={classnames(styles.parallax_layer, styles[`parallax-layer-${index}`])}>
              <img src={`${imageUrl}${index}.png?raw=true`} />
            </div>)
        }
        <div className={styles.parallax_cover}></div>
      </div>
    )
  }
}
