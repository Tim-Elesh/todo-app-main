import './App.css';
import Attribution from './components/Attribution';

function App() {
  return (
  <>
  <body className='bg-gray-100 h-full'>
  <div className='todo-app'>
    <div className='todo-container'>
      <div className='todo-header'>
        <h2>Todo</h2>
        <button></button>
      </div>

      <div className='todo-main'>
        <div className='todo-create'>
          
        </div>
      </div>
    </div>
  </div>

  Add dynamic number items left

  All
  Active 
  Completed

  Clear Completed

  Drag and drop to reorder list
  <Attribution/>
  </body>
</>
  );
}

export default App;
