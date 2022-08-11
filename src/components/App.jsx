import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return good + bad + neutral !== 0
      ? Math.ceil((good / (good + bad + neutral)) * 100)
      : 0;
  };

  return (
    <Section title="Feedback form">
      <FeedbackOptions onLeaveFeedback={handleBtnClick} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </Section>
  );
};

export default App;
