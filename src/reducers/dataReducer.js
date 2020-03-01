


export default (state, action) => {
    switch (action.type) {
      case "CHANGE_DATA":
        return {
          ...state,
          data: action.payload
        }
      case "CHANGE_DATA2":
        return {
          ...state,
          data2: state.data, 
        }
      case "SET_APIDATA" :
        return {
        ...state,
        apiData: action.payload
        }
      default:
        return state
    }
}

