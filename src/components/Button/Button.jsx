import styles from './Button.module.scss';

const Types = {
  Default: 'default',
  Square: 'square',
};

function Button(props) {
  const buttonClasses = [
    styles.button,
    props.type === Types.Square ? styles.square : '',
  ];

  return <button className={buttonClasses.join(' ')}>{props.children}</button>;
}

export default Button;
