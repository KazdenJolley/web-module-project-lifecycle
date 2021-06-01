import './App.css';
import React from 'react';
import Card from './components/Card';
import axios from 'axios';

class App extends React.Component {

  state = {
    info: "Hello"
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/KazdenJolley')
      .then(res => {
        this.setState({
          info: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
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
