import './App.css';
import React from 'react';
import Card from './components/Card';

class App extends React.Component {

  state = {
    info: "Hello"
  }

  render() {
    return (
      <div className="App">
        <Card info={this.state.info} />
      </div>
    );
  }
}

export default App;
