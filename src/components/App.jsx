import { Component } from 'react';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = option => {
    // this.setState(prevState => ({}));
  };
  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }
  countPositiveFeedbackPercentage() {
    let positivePercentage;
    return positivePercentage;
  }
  render() {
    const { good, bad, neutral } = this.state;

    return (
      <section>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </section>
    );
  }
}
