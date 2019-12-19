import React, { Component } from 'react'
import classnames from 'classnames';
import styles from './style.css';
import './style.scss'
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
      <div className="parallax">
        {
          images.map((img, index) =>
            <div key={img} className={classnames('parallax__layer', `parallax__layer__${index}`)}>
              <img src={`${imageUrl}${index}.png?raw=true`} />
            </div>)
        }
        <div className="parallax__cover"></div>
      </div>
    )
  }
}
