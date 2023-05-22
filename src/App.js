import styles from './App.module.scss';
import Button from '@/components/Button/Button';
import Check from '@/components/Check/Check';
import Time from '@/components/Time/Time';
import Arrow from '@/components/Arrow/Arrow';
import chevronLeft from '@/assets/icons/chevron-left.svg';
import man from '@/assets/icons/man.svg';

function App() {
  const cashRegisterNumber = 1;

  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <div className={styles.title}>
          <Time />
          &nbsp;&nbsp;&nbsp;
          <span> Касса #{cashRegisterNumber}</span>
        </div>
        <Check amount={820.25} className={styles.check} />
        <Arrow is-animated className={styles.arrow} />
      </main>
      <footer className={styles.footer}>
        <Button icon={chevronLeft} type="square" />
        <Button icon={man}>Вызов сотрудника</Button>
      </footer>
    </div>
  );
}

export default App;
