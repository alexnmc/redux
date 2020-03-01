import axios from 'axios'


function setApiData(payload) {
    return {
        type: "SET_APIDATA",      // this is what loadData will return...
        payload
    }
}
  
export default function loadData() {
    return dispatch => {
         axios.get('http://www.farmaapp.eu/user')
            .then(response => {
               dispatch(setApiData(response.data));
            })
            .catch(err => {
                console.error(err);
            })
    }
  }