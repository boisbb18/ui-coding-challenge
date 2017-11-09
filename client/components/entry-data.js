import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  open } from '../actions/actions.js';
class EntryData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <hr />
        <div className="info">
          <label > {this.props.name} </label>
          { (this.props.name === 'Favourite Teams')
          ?  <button className="add" onClick={this.props.open}> Add Teams </button>
          :  <button className="add" onClick={this.props.open}> Add {this.props.name} </button>
          }
          <span className="added">None Added</span>
          </div>
      </div>
      )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ open }, dispatch);
};

export default connect(null,mapDispatchToProps)(EntryData);