function TaskList(){
  return(
      <ul className="todo-task-list text-xl mt-7">
          <li className="list-component my-px rounded-t bg-white p-3 py-5">
              <input type="checkbox" defaultChecked/>
              <p>lorem, ipsum dolor.</p>
          </li>
          <li className="list-component my-px bg-white p-3 py-5">
              <input type="checkbox"/>
              <p>Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="list-component my-px bg-white p-3 py-5">
              <input type="checkbox"/>
              <p>Lorem ipsum dolor sit.</p>
          </li>
          <li className="list-component my-px bg-white p-3 py-5">
              <input type="checkbox"/>
              <p>Lorem ipsum dolor sit.</p>
          </li>
          <li className="list-component my-px bg-white p-3 py-5">
              <input type="checkbox"/>
              <p>Lorem, ipsum dolor.</p>
          </li>
          <li className="list-component my-px bg-white p-3 py-5">
              <input type="checkbox"/>
              <p>Lorem ipsum dolor sit amet.</p>
          </li>
      </ul>
  )
}

export default TaskList
