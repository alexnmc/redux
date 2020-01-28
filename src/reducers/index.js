


export default (state = {data:"", data2:""} , action) => {
    switch (action.type) {
      case "CHANGE_DATA":
        return {data: action.payload}
      case "CHANGE_DATA2":
          return {data2: state.data, data:""}
      default:
        return state
    }
  }