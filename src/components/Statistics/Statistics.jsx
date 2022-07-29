import s from './Statistics.module.css';

const Statistics = (props) => {
  const {good, neutral, bad} = props.name;
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      <div>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.feedbackKey}>Good: <span className={s.feedbackValue}>{good}</span></p>
          </li>
          <li className={s.item}>
            <p className={s.feedbackKey}>Neutral:  <span className={s.feedbackValue}>{ neutral}</span></p>
          </li>
          <li className={s.item}>
            <p className={s.feedbackKey}>Bad: <span className={s.feedbackValue}>{ bad }</span></p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Statistics;
