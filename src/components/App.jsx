import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = (e) => {
    const { name } = e.target;
    this.setState(prev => {
      return { [name]: prev[name] + 1 };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          color: '#010101',

          flexDirection: 'column',
        }}
      >
        <Feedback name={this.state} handleBtnClick={this.handleBtnClick} />

        <Statistics name={this.state} />
      </div>
    );
  }
}

export default App;
