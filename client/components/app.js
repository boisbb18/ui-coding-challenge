import React from 'react';
import EntryData from './entry-data.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.info = ['Name','Address','Favourite Teams'];
  }

  render() {
    return (
      <div>
      <h2> Sports Magazine Settings </h2>
      { this.info.map(keys => 
        <EntryData name={keys}/>
      )}
      </div>
    );
  }
}

export default App;