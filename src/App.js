import './App.css';
import Header from './components/Todo-header';
import Attribution from './components/Attribution';
import Main from './components/Todo-main';

function App() {
  return (
  <div className='todo-app mx-auto w-1/3'>
    <div className='todo-container flex-col mt-24'>
      <Header/>
      <Main/>
    </div>
    <Attribution/>
  </div>
  );
}

export default App;
