import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  open } from '../actions/actions.js';
import EnteredData from './entered-data';
class EntryData extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
      //passing the title view(this.props.name is a title)
      this.props.open(this.props.name);     
    }
// This component will create our containerw with label, data information and button.

  render() {
    // const obj = { Name: ' ', Teams: '\n',Address: ', ' };
      let information = this.props.info[this.props.name].join(' ');
      // will check if we saved any information,
      // if no ==> our button text would say Add and data information(span) would say None Added
      // if true ==> our button text changes to Edit and actual data information will be displayed
    return (
      <div className="container">
        <hr />
        <div className="info">
           {
            (this.props.name === 'Teams')
         ?  <label >Favourite Teams</label>
         : <label >{this.props.name}</label>
             }
            {
              (information === 'None Added')
           ? <div>
               <button className="add" onClick={this.openModal}>Add {this.props.name}</button>
               <span className="added">None Added</span>
              </div>
           : <div> 
               {
                (this.props.name === 'Teams')
             ? <button className="add" onClick={this.openModal}> Update {this.props.name} </button>
             : <button className="add" onClick={this.openModal}> Edit {this.props.name} </button>
              }
              <EnteredData name={this.props.name} info={this.props.info}/>
              </div>
            }
          </div>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    info: state.info
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ open }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(EntryData);