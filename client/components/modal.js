import React from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { close, save } from '../actions/actions.js';
import axios from 'axios';
class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.inputs = {
      Name: ['First Name', 'Last Name'],
      Address: ['Street', 'City', 'State',' Zip Code'],
      Teams: ['Team 1', 'Team 2', 'Team 3']
    }
    this.handleWords = this.handleWords.bind(this);
    this.addAnother = this.addAnother.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      added: 4,
      words: {}
    }
  }
  addAnother() {
    this.inputs.Teams.push('Team ' + this.state.added);
    this.setState ({
        added: this.state.added + 1
    })
  }
  handleWords(text,key) {
    let temp = this.state.words;
    temp[key] = text;
    this.setState({
      words: temp
    })
  }
  handleSave() {
    let arr = [];
    for (let i = 0; i < this.inputs[this.props.view].length; i++) {
      let title = this.inputs[this.props.view][i];
      if (!this.state.words[title]) {
        alert('Please fill out all the blanks');
        return;
      }
      arr.push(this.state.words[title]);
    }
    axios.post('/add',{name:this.props.view,value: arr})
      .then((res) => {
        this.props.save({ name: this.props.view, value: arr });
        this.props.close();  
      })
      .catch((err) => {
        console.log('Error --> ',err);
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
          { this.inputs[this.props.view].map((item,index) => {
           return ( 
           <div className="modal-input">
           <label htmlFor="name">{item}: </label>
            <input type="text" id={item} defaultValue={(this.props.info[this.props.view][0] === "None Added") ? "" : this.props.info[this.props.view][index]} onChange={e => this.handleWords(e.target.value,item)} />
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
          <div className="save" onClick={this.handleSave}>Save</div>
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
    view: state.view,
    info: state.info
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ close, save }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);