import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        <p className={s.stat}>Good: {good}</p>
        <p className={s.stat}>Neutral: {neutral}</p>
        <p className={s.stat}>Bad: {bad}</p>
        <p className={s.stat}>Total: {total}</p>
        <p className={s.stat}>Positive feedback: {positivePercentage} %</p>
    </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
                