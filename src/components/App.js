import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  

  handleChange = (e) => {
    e.preventDefault()
    this.props.setData(e.target.value)
  }

  handleSubmit = () => {
    this.props.setData2()
  }

  render() {
    const { state } = this.props
    return (
      <div style = {{display: "flex", flexDirection: "column", width: "100vw", height: "100vh", alignItems: "center", justifyContent:"start"}}>
        <h1 style = {{height: "30pt"}}>{state.data2}</h1>
        <input 
           name = 'input1'
           onChange={this.handleChange}
           value = {state.data}
        />
        <button onClick = {this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

App.propTypes = {
  setData: PropTypes.func.isRequired,
  setData2: PropTypes.func.isRequired
}

export default App

