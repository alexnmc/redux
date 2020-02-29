import axios from 'axios'


function setApiData(payload) {
    return {
        type: "SET_APIDATA",
        payload
    }
}
  
export default function loadData() {
    return dispatch => {
         axios.get('http://www.farmaapp.eu/user')
            .then(response => {
                console.log(response.data)
                dispatch(setApiData(response.data));
            })
            .catch(err => {
                console.error(err);
            })
    }
  }