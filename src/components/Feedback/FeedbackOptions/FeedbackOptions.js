import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<div className={s.container}> {options.map(option => 
        <button className={s.button} key={option} type="button"
            name={option}
            onClick={onLeaveFeedback}>{option}
            </button>)}          
    </div>)
};

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;

