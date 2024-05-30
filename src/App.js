import './App.css';
import Attribution from './components/Attribution';

function App() {
  return (
  <div className='todo-app bg-white m-auto w-1/3 mt-16'>
    <div className='todo-container flex-direction: column; justify-center'>
      <div className='todo-header flex '>
        <h2 className='todo-inscription'>TODO</h2>
        <button><img></img></button>
      </div>

      <div className='todo-main mt-10'>
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
                <p>Drag and drop to reorder list</p>
        </div>
      </div>
    </div>
    <Attribution/>
  </div>
  );
}

export default App;
