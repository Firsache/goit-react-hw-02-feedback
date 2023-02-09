import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <li good={good}>Good: {good}</li>
      <li neutral={neutral}>Neutral: {neutral}</li>
      <li bad={bad}>Bad: {bad}</li>
      <li total={total}>Total: {total}</li>
      <li positivePercentage={positivePercentage}>
        Positive Feedback: {positivePercentage}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
