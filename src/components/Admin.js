import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bar from './AdmBar';
import Patron from './AdmPatron'
import Comment from './AdmComment'
import { Row, Container, Col } from 'reactstrap'

class Admin extends Component {

  render() {

    //console.log("OWNER PROPS =====>", this.props.patrons)

    let thePatrons = this.props.patrons.map(patron => <Patron key={patron.id} patron={patron} />)
    let allBars = this.props.bars.map(bar => <Bar key={bar.id} bar={bar} />)
    let allComments = this.props.comments.map(comment => <Comment key={comment.id} comment={comment} />)

    return (
      <div className = 'background'>
      <div>
        <Container>

          <p style={{textAlign:'center', fontSize:80}}>Admin</p>

          <hr />

          <Row style = {{border:'1px solid lightgrey', padding:20}}>
            <Col style={{textAlign:'right'}}><br /><br /><br /><br /><h1 style={{paddingRight:'50%'}}>Open Bar:</h1></Col>
            <Col>{allBars}</Col>
          </Row><br />

          <Row style={{border:'1px solid lightgrey', padding:20}}>
            <Col><h3>Customers:</h3> {thePatrons}</Col>
          </Row><br />

          <Row style={{border:'1px solid lightgrey', padding:20}}>
            <Col><h3>Comments:</h3> {allComments}</Col>
          </Row><br />
        </Container>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  patrons: state.patrons,
  comments: state.comments,
  bars: state.bars
})

export default connect(mapStateToProps)(Admin);
