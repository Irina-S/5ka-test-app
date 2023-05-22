import { useMemo } from 'react';
import styles from './Check.module.scss';
import { ReactSVG } from 'react-svg';
import check from './../../assets/img/check.svg';

function Check(props) {
  const wholeNumber = useMemo(() => Math.trunc(props.amount), [props.amount]);
  const integerNumber = useMemo(
    () => props.amount.toString().split('.')[1],
    [props.amount]
  );

  return (
    <div className={[styles.check, props.className].join(' ')}>
      <ReactSVG src={check} />
      <div className={styles.body}>
        <div className={styles.title}>Стоимость покупок</div>
        <div className={styles.amount}>
          {wholeNumber}
          <span className={styles.kopecks}>,{integerNumber}</span>₽
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
