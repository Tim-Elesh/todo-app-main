import './App.css';
import Header from './components/Todo-header';
import Attribution from './components/Attribution';
import Main from './components/Todo-main';

function App() {
  return (
  <div className='todo-app m-auto w-1/3 mt-16'>
    <div className='todo-container flex-direction: column; justify-center'>
      <Header/>
      <Main/>
    </div>
    <Attribution/>
  </div>
  );
}

export default App;
