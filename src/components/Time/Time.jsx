import styles from './Time.module.scss';
import { useState, useEffect } from 'react';

const dateOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

const timeOptions = {
  hour: 'numeric',
  minute: 'numeric',
};

function Time(props) {
  const [date, setDate] = useState(new Date());
  const timerId = setTimeout(() => setDate(new Date()), 1000);

  const getFormattedDate = (fullDate) =>
    fullDate.toLocaleDateString('ru', dateOptions);
  const getFormattedTime = (fullDate) =>
    fullDate.toLocaleTimeString('ru', timeOptions);

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.time}>
      {getFormattedDate(date)}
      &nbsp;&nbsp;&nbsp;
      {getFormattedTime(date)}
    </div>
  );
}

export default Time;
