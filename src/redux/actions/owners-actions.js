import axios from 'axios';

export const FETCH_OWNERS_SUCCESS = 'FETCH_OWNERS_SUCCESS';
export const FETCH_OWNERS_FAILED = 'FETCH_OWNERS_FAILED'

export const fetchOwners = () => {
  return dispatch => {
    axios.get('https://areyouheretho.herokuapp.com/owners')
    .then(res => dispatch({
      type: FETCH_OWNERS_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_OWNERS_FAILED,
      payload: err
    }))
  }
};
