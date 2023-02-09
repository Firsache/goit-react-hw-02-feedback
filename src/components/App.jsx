import { Component } from 'react';
import { FeedbackOptions, Statistics } from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  countTotalFeedback() {}
  countPositiveFeedbackPercentage() {}
  render() {
    return (
      <section>
        <FeedbackOptions />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        />
      </section>
    );
  }
}
