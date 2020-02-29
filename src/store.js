import { createStore, applyMiddleware } from "redux";
import dataReducer from "./reducers/dataReducer";
import thunk from "redux-thunk";

const initialState = {
    data:'',
    data2:'',
    apiData:[]
}

function configureStore(state = initialState) {
  return createStore(dataReducer, state, applyMiddleware(thunk));
}
export default configureStore