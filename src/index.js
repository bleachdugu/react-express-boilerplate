import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reducers from 'Reducers'
import App from 'Containers/AppContainer'
import './styles/style.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <ReduxProvider store={store}>
    <div>
      <App />
    </div>
  </ReduxProvider>,
  document.getElementById('app') // eslint-disable-line no-undef
)
// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef
  module.hot.accept()                    // eslint-disable-line no-undef
}