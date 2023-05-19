import './App.scss';
import Button from './components/Button/Button';
import { ReactComponent as chevronLeft } from './assets/icons/chevron-left.svg';

function App() {
  return (
    <div className="app">
      <main className="app__main">main</main>
      <footer className="app__footer">
        <Button>Вызов сотрудника</Button>
      </footer>
    </div>
  );
}

export default App;
