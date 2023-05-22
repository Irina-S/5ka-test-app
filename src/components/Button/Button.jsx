import styles from './Button.module.scss';
import { ReactSVG } from 'react-svg';
import classnames from 'classnames';

const Types = {
  Default: 'default',
  Square: 'square',
};

function Button(props) {
  return (
    <button
      className={classnames(styles.button, {
        [styles.square]: props.type === Types.Square,
      })}
    >
      {props.icon ? <ReactSVG src={props.icon} className={styles.icon} /> : ''}
      {props.children}
    </button>
  );
}

export default Button;
