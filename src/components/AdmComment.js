import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeComment } from '../redux/actions/comments-actions';
import Moment from 'react-moment';

 const Comment = (props) => {

  //console.log("COMMENT PROP ====>", props);
  let comment = props.comment
  const dateToFormat = props.comment.created_at

    return(
      <div>
        <p>
          <Button
            size='sm'
            style={{marginRight:5, marginLeft:20}}
            outline color="danger"
            onClick = {() => props.removeComment(comment.id)}
          >x</Button>
          {comment.commenter} - {comment.comment} &#8592;
          <small style={{marginLeft:5}}>
            <Moment fromNow>
              {dateToFormat}
            </Moment>
          </small>

        </p>

      </div>
    )

};


const mapDispatchToProps = dispatch => bindActionCreators({
  removeComment
}, dispatch)

export default connect(null, mapDispatchToProps)(Comment);
