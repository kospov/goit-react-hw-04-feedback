import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  
  return (
    <>
      <h2 className={s.title}>Please leave feedback</h2>
      <div className={s.btnBlock}>
        <button
          type="button"
          name="good"
          className={s.btn}
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          type="button"
          name="neutral"
          className={s.btn}
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          type="button"
          name="bad"
          className={s.btn}
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object, 
  onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;
