

let initialState = {
    data:'',
    data2:''
}


export default (state = initialState , action) => {
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
      default:
        return state
    }
}