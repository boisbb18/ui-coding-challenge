import React from 'react';
import EntryData from './entry-data.js';
import Modal from './modal.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  save } from '../actions/actions.js';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.info = ['Name','Address','Teams'];
  }

  render() {
    return (
      <div>
      <Modal isOpen={this.props.modalView} />
      <h2> Sports Magazine Settings </h2>
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