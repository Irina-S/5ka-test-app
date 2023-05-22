import { useMemo } from 'react';
import styles from './Check.module.scss';
import { ReactSVG } from 'react-svg';
import check from '@/assets/img/check.svg';
import classnames from 'classnames';

function Check(props) {
  const wholePart = useMemo(() => Math.trunc(props.amount), [props.amount]);
  const integerPart = useMemo(
    () => props.amount.toString().split('.')[1],
    [props.amount]
  );

  return (
    <div className={classnames(styles.check, props.className)}>
      <ReactSVG src={check} />
      <div className={styles.body}>
        <div className={styles.title}>Стоимость покупок</div>
        <div className={styles.amount}>
          {wholePart}
          <span className={styles.kopecks}>,{integerPart}</span>₽
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
