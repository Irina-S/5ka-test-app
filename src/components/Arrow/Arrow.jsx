import styles from './Arrow.module.scss';
import { ReactSVG } from 'react-svg';
import classnames from 'classnames';
import arrow from './../../assets/img/arrow.svg';

function Arrow(props) {
  return (
    <div
      className={classnames(props.className, {
        [styles.animated]: props['is-animated'],
      })}
    >
      <ReactSVG src={arrow} />
    </div>
  );
}

export default Arrow;
