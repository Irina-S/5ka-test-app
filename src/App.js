import './App.scss';
import Button from './components/Button/Button';
import Check from './components/Check/Check';
import Time from './components/Time/Time';
import Arrow from './components/Arrow/Arrow';
import chevronLeft from './assets/icons/chevron-left.svg';
import man from './assets/icons/man.svg';

function App() {
  return (
    <div className="app">
      <main className="app__main">
        <div className="app__title">
          <Time />
          &nbsp;
          <span> Касса #1</span>
        </div>
        <Check amount="820.25" className="app__check" />
        <Arrow animated={true} className="app__arrow" />
      </main>
      <footer className="app__footer">
        <Button type="square" icon={chevronLeft} />
        <Button icon={man}>Вызов сотрудника</Button>
      </footer>
    </div>
  );
}

export default App;
