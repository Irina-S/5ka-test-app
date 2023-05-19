import './App.scss';
import Button from './components/Button/Button';
import Check from './components/Check/Check';
import chevronLeft from './assets/icons/chevron-left.svg';
import man from './assets/icons/man.svg';

function App() {
  return (
    <div className="app">
      <main className="app__main">
        <Check amount="820.25" className="app__check" />
      </main>
      <footer className="app__footer">
        <Button type="square" icon={chevronLeft} />
        <Button icon={man}>Вызов сотрудника</Button>
      </footer>
    </div>
  );
}

export default App;
