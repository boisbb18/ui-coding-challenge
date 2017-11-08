import React from 'react';

class EntryData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <hr />
        <div className="info">
          <label > {this.props.name} </label>
          { (this.props.name === 'Favourite Teams')
          ?  <button className="add"> Add Teams </button>
          :  <button className="add"> Add {this.props.name} </button>
          }
          <span className="added">None Added</span>
          </div>
      </div>
      )
  }
}

export default EntryData;