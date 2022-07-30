import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      {good === 0 && neutral===0 && bad===0 ? 
        <p className={s.feedbackKey}>No feedback given</p>
       : (
        <div>
          <ul className={s.list}>
            <li className={s.item}>
              <p className={s.feedbackKey}>
                Good: <span className={s.feedbackValue}>{good}</span>
              </p>
            </li>
            <li className={s.item}>
              <p className={s.feedbackKey}>
                Neutral: <span className={s.feedbackValue}>{neutral}</span>
              </p>
            </li>
            <li className={s.item}>
              <p className={s.feedbackKey}>
                Bad: <span className={s.feedbackValue}>{bad}</span>
              </p>
            </li>
            <li className={s.item}>
              <p className={s.feedbackKey}>
                Total: <span className={s.feedbackValue}>{total()}</span>
              </p>
            </li>
            <li className={s.item}>
              <p className={s.feedbackKey}>
                Positive feedback:{' '}
                <span className={s.feedbackValue}>{positivePercentage()}%</span>
              </p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
}

export default Statistics;
