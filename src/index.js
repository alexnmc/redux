import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import data from './reducers'

const store = createStore(data)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <App
    state={store.getState()}
    setData = {(name) => store.dispatch({type: "CHANGE_FIRSTNAME", payload: name})}
    setData2 = {() => store.dispatch({type: "CHANGE_FIRSTNAME2"})}
  />,
  rootEl
)

render()
store.subscribe(render)