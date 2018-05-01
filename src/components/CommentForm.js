import React, { Component } from 'react';
import { Input, Form, FormGroup, Label, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addComment } from '../redux/actions/comments-actions'

class CommentForm extends Component {

  state = {
    commenter: '',
    comment: '',
    bar_id: this.props.barId
  }

  componentWillReceiveProps(nextProps){
    this.setState({bar_id: nextProps.barId})
  }


  render() {
    //console.log('CommentForm Props',this.props)
    return (
      <Form style = {{border:'1px dashed lightgrey', padding:20, margin:"5% 25% 5% 25%"}}>
        <FormGroup>
          <Label>What do you want everyone to know?! Share your thoughts: <span role="img"  aria-label="emoji">&#128512;</span></Label>
          <Input
            type="text"
            placeholder="Your Name"
            value = {this.state.commenter}
            onChange = {e => this.setState({ commenter: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="textarea"
            placeholder="This bar is awesome!"
            value = {this.state.comment}
            onChange = {e => this.setState({ comment: e.target.value })}
          />
        </FormGroup>

        <Button
          outline color="warning"
          onClick = { () => {
            this.props.addCommentFunc(this.state)
            console.log(this.state)
            this.setState({
              commenter: '',
              comment: '',
              bar_id: this.props.barId
            })
          }}
        >Submit</Button>

      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addCommentFunc: addComment
}, dispatch)

export default connect(null, mapDispatchToProps)(CommentForm);
