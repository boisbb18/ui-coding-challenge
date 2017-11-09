import React from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { close } from '../actions/actions.js';
class Modal extends React.Component {

  constructor(props) {
    super(props);
  }
  // close(e) {
  //   e.preventDefault()

  //   if (this.props.onClose) {
  //     this.props.onClose()
  //   }
  // }
  render() {
    let modaloverlay = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: '10',
      background: 'rgba(0, 0, 0, 0.3)'
    }
    return (!this.props.modalView) ? null :
    (
     <div>
        <div className="modal-container">
        <p><button onClick={this.props.close}> Close</button></p>
        <div>
          {this.props.children}
        </div>
        </div>
        <div style={modaloverlay} onClick={this.props.close}/>}
    </div>
      )
  }
};

const mapStateToProps = (state) => {
  return {
    modalView: state.modalView
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ close }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);