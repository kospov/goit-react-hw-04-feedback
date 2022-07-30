import s from './Feedback.module.css';

const Feedback = ({ handleBtnClick}) => {
  return (
    <>
      <h2 className={s.title}>Please leave feedback</h2>
      <div className={s.btnBlock}>
        <button
          type="button"
          name="good"
          className={s.btn}
          onClick={handleBtnClick}
        >
          Good
        </button>
        <button
          type="button"
          name="neutral"
          className={s.btn}
          onClick={handleBtnClick}
        >
          Neutral
        </button>
        <button
          type="button"
          name="bad"
          className={s.btn}
          onClick={handleBtnClick}
        >
          Bad
        </button>
      </div>
    </>
  );
};

export default Feedback;
