import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import  changeData  from "../actions/changeData";
import  changeData2  from "../actions/changeData2";
import  loadData from "../actions/loadData";

class App extends Component {
  

  handleChange = (e) => {
    e.preventDefault()
    this.props.changeData(e.target.value)  // action
  }

  handleSubmit = () => {
    this.props.changeData2() // action
  }

  render() {
    console.log("this.props:", this.props)
    return (
      <div style = {{display: "flex", flexDirection: "column", width: "100vw", height: "100vh", alignItems: "center", justifyContent:"start"}}>
       <h1 style = {{height: "30pt"}}>{this.props.data2}</h1>
        <input 
           name = 'input1'
           onChange={this.handleChange}
           value = {this.props.data}
        />
        <button onClick = {this.handleSubmit}>display</button>
        <button onClick = {this.props.loadData}>get data</button> 
        <h3>Api data:</h3>
        {this.props.apiData.map(item => {
          return(
            <div key = {item._id}>
              <h2>{item.username}</h2>
            </div>
          )
        })}
      </div>
    )
  }
}

App.propTypes = {
  changeData: PropTypes.func.isRequired,
  changeData2: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({  // makes redux state available in component via this.props
  ...state
});

const mapDispatchToProps = dispatch => ({    // makes action availabale in the component via this.props
  changeData: (payload) => dispatch(changeData(payload)), 
  changeData2: (payload) => dispatch(changeData2(payload)),
  loadData: (payload) => dispatch(loadData(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

