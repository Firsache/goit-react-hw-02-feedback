import { Component } from 'react';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback() {
    console.log();
  }
  countTotalFeedback() {
    let total = this.state.good + this.state.bad + this.state.neutral;
    return total;
  }
  countPositiveFeedbackPercentage() {
    let positivePercentage;
    return positivePercentage;
  }
  render() {
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
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </section>
    );
  }
}
