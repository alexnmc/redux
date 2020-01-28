


export default (state = {data:"", data2:""} , action) => {
    switch (action.type) {
      case "CHANGE_FIRSTNAME":
        return {data: action.payload}
      case "CHANGE_FIRSTNAME2":
          return {data2: state.data, data:""}
      default:
        return state
    }
  }