import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import data from './reducers'

const store = createStore(data)

const render = () => ReactDOM.render(
  <App
    state={store.getState()}
    setData = {(name) => store.dispatch({type: "CHANGE_DATA", payload: name})}
    setData2 = {() => store.dispatch({type: "CHANGE_DATA2"})}
  />,
  document.getElementById('root')
)

render()
store.subscribe(render)