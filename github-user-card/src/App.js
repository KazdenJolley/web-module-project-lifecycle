import './App.css';
import React from 'react';
import Card from './components/Card';
import axios from 'axios';

class App extends React.Component {

  state = {
    info: {},
    followers: []
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

    axios
      .get('https://api.github.com/users/KazdenJolley/followers')
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <Card info={this.state.info} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
