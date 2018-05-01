import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class BarAuth extends Component {
  render() {

    //console.log("OWNER LOGIN PROPS ====>", this.props)

    //DUMMY LOGIN
    return (
      <div className = 'background'>
        <div className = 'container'>
          <div className='col box' style={{paddingTop:150}}>
            <h1 className="display-3">Bar Login</h1>
            <hr />
              <Form style = {{padding:20, margin:"5% 25% 5% 25%"}}>
                <FormGroup>

                  <Label>username:</Label>
                  <Input
                    type="text"
                  />
                </FormGroup>

                <FormGroup>
                  <Label>password:</Label>
                  <Input
                    type="password"
                  />
                </FormGroup>

                <Link to="/vjwHRglLqtiNaRwQgJ0IvjwHRglLqt"><Button outline color="warning">Login</Button></Link>
              </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default BarAuth;
