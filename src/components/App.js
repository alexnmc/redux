import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import  changeData  from "../actions/changeData";
import  changeData2  from "../actions/changeData2";
import  getRequest from "../actions/getRequest";

class App extends Component {
  

  handleChange = (e) => {
    e.preventDefault()
    this.props.changeData(e.target.value)  // action
  }

  handleSubmit = () => {
    this.props.changeData2() // action
  }

  render() {
    console.log(this.props)
    return (
      <div style = {{display: "flex", flexDirection: "column", width: "100vw", height: "100vh", alignItems: "center", justifyContent:"start"}}>
       <h1 style = {{height: "30pt"}}>{this.props.data2}</h1>
        <input 
           name = 'input1'
           onChange={this.handleChange}
           value = {this.props.data}
        />
        <button onClick = {this.handleSubmit}>Submit</button>
        <button onClick = {this.props.getRequest}>get data</button>
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
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  changeData: (payload) => dispatch(changeData(payload)),
  changeData2: (payload) => dispatch(changeData2(payload)),
  getRequest: (payload) => dispatch(getRequest(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

