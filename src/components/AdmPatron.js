import React from 'react';
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removePatron } from '../redux/actions/patrons-actions'


const Patron = (props) => {

  //console.log('PATRON PROPS ======>', patron);
  let patron = props.patron

  return(
  <div>
    <p>
      <Button
        size='sm'
        style={{marginRight:5, marginLeft:20}}
        outline color="danger"
        onClick = {() => props.removePatron(patron.id)}
      >x</Button>
      {patron.first_name} {patron.last_name}
   </p>
  </div>
  )
};

const mapDispatchToProps = dispatch => bindActionCreators({
  removePatron
}, dispatch)

export default connect(null,mapDispatchToProps)(Patron);
