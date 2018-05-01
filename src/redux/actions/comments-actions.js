import axios from 'axios';

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILED = 'ADD_COMMENT_FAILED';
export const REMOVED_COMMENT = 'REMOVED_COMMENT';
export const REMOVED_COMMENT_FAILED = 'REMOVED_COMMENT_FAILED'

export const fetchComments = () => {
  return dispatch => {
    axios.get('http://localhost:8000/comments')
    .then(res => dispatch({
      type: FETCH_COMMENTS_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_COMMENTS_FAILED,
      payload: err
    }))
  }
};

  export const addComment = ( comment ) => {
    //console.log(comment);
    return dispatch => {
      axios.post(`http://localhost:8000/comments`, comment)
      .then(res => dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: ADD_COMMENT_FAILED,
        payload: err
      }))
    }
  };

  export const removeComment = id => {
    //console.log("ACTION REMOVE COMMENT:", id)
  return dispatch => {
    axios.delete(`http://localhost:8000/comments/${id}`)
    .then(res => dispatch({
      type: REMOVED_COMMENT,
      payload: id
    }))
    .catch(err => dispatch({
      type: REMOVED_COMMENT_FAILED,
      payload: err
    }))
  }
}
