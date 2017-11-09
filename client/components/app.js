import React from 'react';
import EntryData from './entry-data.js';
import Modal from './modal.js';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import {  open } from '../actions/actions.js';
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
      { this.info.map(keys => 
        <EntryData name={keys} />
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
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ open }, dispatch);
// };


export default connect(mapStateToProps) (App);