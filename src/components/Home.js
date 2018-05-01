import React, { Component } from 'react';
import { Input, Form, FormGroup, Label, Button } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPatron } from '../redux/actions/patrons-actions'
import { Container, Jumbotron } from 'reactstrap'

class Home extends Component {

  state = {
    first_name: '',
    last_name: '',
    bar_id: this.props.bars.id,
    shown: true
  }

  toggleForm = () => {
    this.setState({
      shown: !this.state.shown
    })
  }

  render() {

    let shown = {
      visibility: this.state.shown ? "visible" : "hidden"
    };

    let hidden = {
      visibility: this.state.shown ? "hidden" : "visible",
      textAlign:'center'
    }

    //console.log('ALL PROPS FOR HOME ====>', this.props);
    let allBars = this.props.bars.map(bar => <option key={bar.id} value={bar.id}>{bar.bar_name}</option> )
    let barStatus = this.props.bars.map(bar => <option key={bar.id} value={bar.id}>{bar.open}</option> )

    if(barStatus.length === 0) {
      return (
        <div>
          <Container>
            <Jumbotron style={{margin:"12% 0% 22% 0%"}}>
              <h1 style={{textAlign:'center', color:'red', padding:'10%'}}>
                Sorry, all bars are closed. <br />Check-ins currently disabled.
              </h1>
              <h3 style={{textAlign:'center'}}><b>Check back soon!</b></h3>
            </Jumbotron>
          </Container>
        </div>
      )
    } else {
      return (
        <div className = 'background'>

        <div
          className = 'container'
          style = { shown }>
          <div style = { hidden }>
            <h1 style={{paddingTop:20, paddingBottom:5}}><b>You are checked in!</b></h1>
            <Button
              size = 'lg' block
              outline color='warning'
              onClick = {
                () => {
                this.toggleForm()
                this.setState({
                  first_name: '',
                  last_name: '',
                  bar_id: this.props.bars.id
                })
              }}
            >Check-in Another Person</Button>
          </div>


          <div className='col box'>
            <h1 className="display-3">Check-In</h1>
            <hr />

              <Form style = {{padding:20, margin:"2% 25% 5% 25%"}}>
                <FormGroup>
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    value = {this.state.first_name}
                    onChange = {e => this.setState({ first_name:e.target.value })}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Last Name (Or a nickname - just for fun!)</Label>
                  <Input
                    type="text"
                    value = {this.state.last_name}
                    onChange = {e => this.setState({ last_name:e.target.value })}
                  />
                </FormGroup>

                <FormGroup>
                  <Input type="select"
                    value = {this.state.bar_id}
                    onChange = {e => {
                      this.setState({ bar_id:e.target.value })
                    }}
                    defaultValue=""
                  >
                    <option
                      value=""
                      disabled
                      hidden
                    >Select Bar</option>
                    {allBars}
                  </Input>
                </FormGroup>

                <Button
                  outline color="warning"
                  onClick = {() => {
                    this.props.addPatronFunc(this.state)
                    console.log(this.state)
                    this.toggleForm()
                  }}
                >Submit</Button>
                </Form>
            </div>
          </div>

        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  bars: state.bars.filter(bar => bar.open === true)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addPatronFunc: addPatron
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
