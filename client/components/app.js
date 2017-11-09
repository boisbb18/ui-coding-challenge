import React from 'react';
import EntryData from './entry-data.js';
import Modal from './modal.js';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.info = ['Name','Address','Favourite Teams'];
  }

  render() {
    return (
      <div>
      <Modal isOpen={this.props.modalView}>
      </Modal>
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
    modalView: state.modalView
  };
};


export default connect(mapStateToProps) (App);