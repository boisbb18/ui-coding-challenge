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
      this.props.open(this.props.name);     
    }

  render() {
    // const obj = { Name: ' ', Teams: '\n',Address: ', ' };
      let information = this.props.info[this.props.name].join(' ');
    return (
      <div className="container">
        <hr />
        <div className="info">
           {
            (this.props.name === 'Teams')
         ?  <label >Favourite Teams</label>
         : <label > {this.props.name} </label>
             }
            {
              (information === 'None Added')
           ? <div>
               <button className="add" onClick={this.openModal}> Add {this.props.name} </button>
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