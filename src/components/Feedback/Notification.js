import s from './Notification.module.css';

const Notification = ({ message }) => {
    return (
        <div>
            <p className={s.message}>{message}</p>
        </div>  
    )
};

export default Notification;