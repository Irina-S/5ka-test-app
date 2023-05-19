import styles from './Time.module.scss';
import { useState, useEffect } from 'react';

function Button(props) {
  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const [date, setDate] = useState(new Date());
  const timerId = setTimeout(() => setDate(new Date()), 1000);

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className={styles.time}>
      {date.toLocaleDateString('ru', dateOptions)}
      &nbsp;
      {date.toLocaleTimeString('ru', timeOptions)}
    </div>
  );
}

export default Button;
