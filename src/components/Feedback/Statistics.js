import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        <p className={s.stat}>Good: {good}</p>
        <p className={s.stat}>Neutral: {neutral}</p>
        <p className={s.stat}>Bad: {bad}</p>
        <p className={s.stat}>Total: {total}</p>
        <p className={s.stat}>Positive feedback: {positivePercentage} %</p>
    </div>
);

export default Statistics;
                