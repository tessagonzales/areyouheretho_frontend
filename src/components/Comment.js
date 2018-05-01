import React from 'react';
import { Card, CardBody } from 'reactstrap';
import Moment from 'react-moment';

const Comment = ({ comment }) => {

  const dateToFormat = comment.created_at;

  function increment (total) {
    total +=1;
    return total;
  }

  console.log('total!!', increment(1))

  return(
  <div>
    <Card style={{margin:10, padding:10, opacity:'.8'}}>
      <CardBody>
        <span style={{fontSize:20}}><b>{comment.commenter}</b> says </span> <i>{comment.comment}</i>
          <br /><br />
        <small> &#8593; Posted </small>
        <small>
          <Moment fromNow>
            {dateToFormat}
          </Moment>
        </small>
      </CardBody>
    </Card>
  </div>
  )
};

export default Comment;


// Like Button  - stretch
// <img
//   src='https://image.freepik.com/free-icon/thumbs-up-hand-symbol_318-41939.jpg'
//   style={{height:20, width:20, cursor:'pointer'}}
//   onClick = {() => {
//     console.log('heard')
//   }}/>
