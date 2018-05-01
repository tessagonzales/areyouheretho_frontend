import axios from 'axios';

export const FETCH_BARS_SUCCESS = 'FETCH_BARS_SUCCESS';
export const FETCH_BARS_FAILED = 'FETCH_BARS_FAILED';
export const TOGGLE_SUCCESS = 'TOGGLE_SUCCESS';
export const TOGGLE_FAIL = 'TOGGLE_FAIL';

export const fetchBars = () => {
  return dispatch => {
    axios.get('http://localhost:8000/bars')
    .then(res => dispatch({
      type: FETCH_BARS_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_BARS_FAILED,
      payload: err
    }))
  }
};

export const toggleStatus = bar => {
  console.log("ACTION TOGGLE STATUS:", bar)
  return dispatch => {
    console.log('heard');
    axios.put(`http://localhost:8000/bars/${bar.id}`, bar)
    .then(res => dispatch({
      type: TOGGLE_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: TOGGLE_FAIL,
      payload: err
    }))
  }
};
