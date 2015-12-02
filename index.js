import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App.js'
import todoApp from './reducers/reducers.js'

let store = createStore(todoApp)

let rootElement = document.getElementById('target')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)