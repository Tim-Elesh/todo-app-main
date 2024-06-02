function TaskList(){
    return(
        <ul className="todo-task-list text-xl mt-6">
            <li className="list-component my-1 bg-white p-3 py-4">
                <input type="checkbox" checked/>
                <p>lorem, ipsum dolor.</p>
            </li>
            <li className="list-component my-1 bg-white p-3 py-4">
                <input type="checkbox"/>
                <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className="list-component my-1 bg-white p-3 py-4">
                <input type="checkbox"/>
                <p>Lorem ipsum dolor sit.</p>
            </li>
            <li className="list-component my-1 bg-white p-3 py-4">
                <input type="checkbox"/>
                <p>Lorem ipsum dolor sit.</p>
            </li>
            <li className="list-component my-1 bg-white p-3 py-4">
                <input type="checkbox"/>
                <p>Lorem, ipsum dolor.</p>
            </li>
            <li className="list-component my-1 bg-white p-3 py-4">
                <input type="checkbox"/>
                <p>Lorem ipsum dolor sit amet.</p>
            </li>
        </ul>
    )
}

export default TaskList