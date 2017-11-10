import React from 'react';
import EntryData from './entry-data.js';
import Modal from './modal.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  save } from '../actions/actions.js';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.info = ['Name','Address','Teams']; //will pass to EntryData container to create button and data information
  }

  render() {
    // when this.props.modalView === true, it will show our modal
    // creating EntryData container
    return (
      <div>
      <div className="header">
        <p id="text"> Sports Magazine </p>
      </div>
      <Modal isOpen={this.props.modalView} /> 
      <div className="title">Sports Magazine Settings </div>
      { this.info.map(item => 
        <EntryData key={item} name={item} />
      )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalView: state.modalView,
    info: state.info,
    view: state.view
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ save }, dispatch);
};


export default connect(mapStateToProps,mapDispatchToProps) (App);