import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { toggleStatus } from '../redux/actions/bars-actions'

class Bar extends Component {
  render() {

    const onToggle = (checked) => {
      if (bar.open === true) {
        return checked
      } else {
        return ''
      }
    }

    // console.log("ADMIN PROPS ====>", this.props);
    let bar = this.props.bar
    console.log('BAR OPEN ----> \n', bar)

  return(
    <div>
      <h5>
        {bar.bar_name}
        <form>
        <label className="switch">
          <input
            type="checkbox"
            checked = {onToggle("checked")}
            onChange = { () => {
              this.props.toggleStatus(bar)
            }}
          />
          <span className="slider round"></span>
        </label>
        </form>
      </h5>
    </div>
    )
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleStatus
}, dispatch)

export default connect(null, mapDispatchToProps)(Bar);
