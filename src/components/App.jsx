import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = e => {
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

    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;

    return good + bad + neutral !== 0
      ? Math.ceil((good / (good + bad + neutral)) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Feedback form">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleBtnClick}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </Section>
    );
  }
}



export default App;
