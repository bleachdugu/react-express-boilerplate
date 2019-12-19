import React from 'react'
import ReactDOM from 'react-dom'
import App from 'Components/App'
import './styles/style.scss'
ReactDOM.render(
  <div>
    <h1>Boilerplate</h1>
    <p className="description">Express and Webpack Three.js Boilerplate App</p>
    <App />
  </div>,
  document.getElementById('app') // eslint-disable-line no-undef
)
// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef
  module.hot.accept()                    // eslint-disable-line no-undef
}