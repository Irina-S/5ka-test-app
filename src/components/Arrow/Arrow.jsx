import styles from './Arrow.module.scss';
import { ReactSVG } from 'react-svg';
import arrow from './../../assets/img/arrow.svg';

function Arrow(props) {
  return (
    <div
      className={[props.className, props.animated ? styles.animated : ''].join(
        ' '
      )}
    >
      <ReactSVG src={arrow} />
    </div>
  );
}

export default Arrow;
