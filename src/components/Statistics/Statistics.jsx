import { Section } from 'components';
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Section>
      <h2>Statistics</h2>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {total}</div>
      <div>Positive Feedback: {positivePercentage}%</div>
    </Section>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
