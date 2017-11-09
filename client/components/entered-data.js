import React from 'react';

export default class EnteredData extends React.Component {
  constructor(props) {
    super(props);
    this.renderName = this.renderName.bind(this);
    this.renderAddress = this.renderAddress.bind(this);
    this.renderTeams = this.renderTeams.bind(this);
  }

  renderName() {
    let name = this.props.info[this.props.name].join(' ');
    return (
     <div>
        <span className="added">{name}</span>
       </div>
      )
  }

  renderAddress() {
    return (
     <div>
        <span className="added">{this.props.info[this.props.name][0]} <br /> {this.props.info[this.props.name][1] + ', ' + this.props.info[this.props.name][2] + ' ' + this.props.info[this.props.name][3]}</span>
       </div>
      )
  }

  renderTeams() {
    return (
     <div className="teams">
      {this.props.info[this.props.name].map((item,index) => {
       return (
          <div>
          <label>{index+1}.  {item}</label>
          </div>)
            })
        }
       </div>
      )
  }



  render() {
    switch(this.props.name) {
      case 'Name':
        return this.renderName();
      case 'Address':
        return this.renderAddress();
      case 'Teams':
        return this.renderTeams();
    } 
  }
}