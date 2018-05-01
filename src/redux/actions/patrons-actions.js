import axios from 'axios';

export const FETCH_PATRONS_SUCCESS = 'FETCH_PATRONS_SUCCESS';
export const FETCH_PATRONS_FAILED = 'FETCH_PATRONS_FAILED';
export const ADD_PERSON_SUCCESS = 'ADD_PERSON_SUCCESS';
export const ADD_PERSON_FAILED = 'ADD_PERSON_FAILED';
export const REMOVED_PATRON = 'REMOVED_PATRON';
export const REMOVED_PATRON_FAILED = 'REMOVED_PATRON_FAILED';

export const fetchPatrons = () => {
  return dispatch => {
    axios.get('http://localhost:8000/patrons')
    .then(res => dispatch({
      type: FETCH_PATRONS_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_PATRONS_FAILED,
      payload: err
    }))
  }
};

export const addPatron = ( person ) => {
  console.log(person)
  return dispatch => {
    axios.post(`http://localhost:8000/patrons`, person)
    .then(res => dispatch({
      type: ADD_PERSON_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ADD_PERSON_FAILED,
      payload: err
    }))
  }
};

export const removePatron = id => {
  return dispatch => {
    axios.delete(`http://localhost:8000/patrons/${id}`)
    .then(res => dispatch({
      type: REMOVED_PATRON,
      payload: id
    }))
    .catch(err => dispatch({
      type: REMOVED_PATRON_FAILED,
      payload: err
    }))
}
};
