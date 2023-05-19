import { useMemo } from 'react';
import styles from './Check.module.scss';
import { ReactSVG } from 'react-svg';
import check from './../../assets/img/check.svg';

function Check(props) {
  const rubles = useMemo(() => Math.trunc(props.amount), [props.amount]);
  const kopecks = useMemo(
    () => props.amount.toString().split('.')[1],
    [props.amount]
  );

  console.log(props);
  return (
    <div className={[styles.check, props.className].join(' ')}>
      <ReactSVG src={check} />
      <div className={styles.body}>
        <div className={styles.title}>Стоимость покупок</div>
        <div className={styles.amount}>
          {rubles}
          <span className={styles.kopecks}>,{kopecks}</span>₽
        </div>
        <div className={styles.text}>
          Приложите
          <br />
          или прокатайте карту
        </div>
      </div>
    </div>
  );
}

export default Check;