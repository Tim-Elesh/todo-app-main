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
          <label>
            <input type='text' placeholder='Create a new todo...'></input>
          </label>
        </div>

        <div className='todo-tasks'>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>

            <div className='todo-buttons'>
                <p className='counter'>3 items left</p>
                <div className='todo-sort'>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                <button>Clear Completed</button>
            </div>
        </div>
      </div>
    </div>
  </div>

  Drag and drop to reorder list
  <Attribution/>
  </body>
</>
  );
}

export default App;
