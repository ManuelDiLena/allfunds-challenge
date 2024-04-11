import './App.css';
import { List } from './components/List';
import { Menu } from './components/Menu';

function App() {
  return (
    <>
      <Menu />
      <div className='container'>
        <List />
      </div>
    </>
  );
}

export default App
