//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Statistics from './components/Feedback/Statistics/Statistics';
import FeedbackOptions from './components/Feedback/FeedbackOptions/FeedbackOptions';
import Section from './components/Feedback/Section/Section';
import Notification from './components/Feedback/Notification/Notification';

//function App() {
//  return (
 //   <div className="App">
   //   <header className="App-header">
   //     <img src={logo} className="App-logo" alt="logo" />
   //     <p>
   //       Edit <code>src/App.js</code> and save to reload.
   //     </p>
    //    <a
    //      className="App-link"
    //      href="https://reactjs.org"
     //     target="_blank"
     //     rel="noopener noreferrer"
     //   >
    //      Learn React
     //   </a>
      //</header>
    //</div>
 // );
//}
class App extends React.Component {
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
    const { good } = this.state;
        return Math.round(good*100/this.countTotalFeedback());
    };

    onLeaveFeedback = (event) => {
		const name = event.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};
    
    
    render() {
       // const {good, neutral, bad} = this.state;
        const options = Object.keys(this.state);
        return (
            <div>

                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
                    
                    
                </Section>

                {this.countTotalFeedback() === 0 ? (<Notification message="No feedback given" />) 
                : (
                 
                <Section title="Statistics">
                  <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage() } />
                </Section>   
            )};
                

                
                
            </div>
        );
    }
};

export default App;
