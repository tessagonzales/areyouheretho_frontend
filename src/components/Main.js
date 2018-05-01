import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import { connect } from 'react-redux'
import CommentForm from './CommentForm'
import Comment from './Comment'
import Patron from './Patron'


class Bar extends Component {

  render() {
    //console.log('bars props', this.props)

    if(this.props.bars && this.props.bars.open === true) {
      let allComments = this.props.comments.filter(comment => comment.bar_id === this.props.bars.id)
      .map(comment => <Comment key={comment.id} comment={comment} />)

      let allPatrons = this.props.patrons.filter(patron => patron.bar_id === this.props.bars.id)
      .map(patron => <Patron key={patron.id} patron={patron} />)

      //console.log('PATRON MAPS ===>', allPatrons)
      //console.log('ALL COMMENTS MAP ~~~~~~~>', allComments);


      return (
        <div className = 'background'>
          <div>
            <Container>
              <p className='bar-title'>{this.props.bars.bar_name}</p>
              <Row>
                  <Col><p style={{fontSize:20}}>Checked In Customers: </p>
                  {allPatrons}
                </Col>
              </Row>

              <hr /><br />

              <Row>
                <Col><p style={{fontSize:30}}> <span role="img"  aria-label="emoji">&#9997;</span> Comments: </p></Col>
              </Row>

              <Row>
                <Col>
                  {allComments}
                </Col>
              </Row>

            </Container>
            <CommentForm barId={this.props.bars.id} />
          </div>
        </div>
        );
    } else {
      return (
        <div>
          <Container>
            <Jumbotron style={{margin:"12% 0% 19% 0%"}}>
              <h1 style={{textAlign:'center', color:'red', padding:'10%'}}>
                Bar is closed. Check back soon!
              </h1>
            </Jumbotron>
          </Container>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, props) => {
  // console.log('state', state)
  return ({
    bars: state.bars.filter(bar => bar.id === Number(props.match.params.id))[0],
    comments: state.comments,
    patrons: state.patrons
  })
}

export default connect(mapStateToProps)(Bar);
