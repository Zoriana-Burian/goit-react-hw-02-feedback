import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return bad + good + neutral; 
      
        
    };

    countPositiveFeedbackPercentage = () => {
        return this.state.good * 100 / this.countTotalFeedback();
    };

    onLeaveFeedback = (event) => {
		const name = event.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};
    
    
    render() {
        //const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        return (
            <div>

                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
                    
                    
                </Section>

                {this.countTotalFeedback === 0 ? (<Notification message="No feedback given" />) 
                : (
                 
                <Section title="Statistics">
                    <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()} />
                </Section>   
            )};
                

                
                
            </div>
        );
    }
};

export default Feedback;