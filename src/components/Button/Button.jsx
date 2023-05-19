import styles from './Button.module.scss';
import { ReactSVG } from 'react-svg';

const Types = {
  Default: 'default',
  Square: 'square',
};

function Button(props) {
  const buttonClasses = [
    styles.button,
    props.type === Types.Square ? styles.square : '',
  ];

  return (
    <button className={buttonClasses.join(' ')}>
      {props.icon ? <ReactSVG src={props.icon} className={styles.icon} /> : ''}
      {props.children}
    </button>
  );
}

export default Button;
