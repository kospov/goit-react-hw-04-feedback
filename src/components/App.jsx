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

  // countTotalFeedback = () => {
  //   const values = Object.values(this.state);
  //   let total = 0;
  //   for (const value of values) {
  //     total += value;
  //     return total;
  //   }
  // }

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;

    return good + bad + neutral
  }

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;

    return good + bad + neutral !== 0 ? Math.ceil((good / (good + bad + neutral)) * 100) : 0
  }

  
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
        <Feedback
          name={this.state}
          handleBtnClick={this.handleBtnClick}
        />

        <Statistics
          name={this.state}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={ this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default App;
