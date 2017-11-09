import React from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { close } from '../actions/actions.js';
class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.inputs = {
      Name: ['First Name', 'Last Name'],
      Address: ['Street', 'City', 'State',' Zip Code'],
      Teams: ['Team 1', 'Team 2', 'Team 3']
    }
    this.addAnother = this.addAnother.bind(this);
    this.state = {
      added: 4
    }
  }
  addAnother() {
    this.inputs.Teams.push('Team ' + this.state.added);
    this.setState ({
        added: this.state.added + 1
    })
  }
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
        <div className="boxclose" onClick={this.props.close}></div>
        <div className="text-center">
         <h3> {this.props.view} </h3>
        </div>
        <div className="input-container">
          { this.inputs[this.props.view].map((item) => {
           return ( 
           <div className="modal-input">
           <label for="name">{item}: </label>
            <input type="text" id={item}/>
            </div>
            ) 
           })
          }
          {
            (this.props.view === 'Teams')
            ? <div className="forTeams" onClick={this.addAnother}>+ Add Another </div>
            : <div />
          }
        </div>
        <div className="buttons"> 
          <div className="cancel" onClick={this.props.close}>Cancel</div>
          <div className="save" onClick={this.props.close}>Save</div>
        </div>
        </div>
        <div style={modaloverlay} onClick={this.props.close}/>
    </div>
      )
  }
};

const mapStateToProps = (state) => {
  return {
    modalView: state.modalView,
    view: state.view
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ close }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);