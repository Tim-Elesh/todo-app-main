import Counter from "./Todo-counter";
import Sort from "./Todo-sort";

function Buttons(){
    return(
        <div className='todo-buttons flex justify-between text-gray-400 rounded-b bg-white p-5'>
            <Counter/>
            <Sort/>
            <button className="focus: text-blue-600">Clear Completed</button>
        </div>
    )
}

export default Buttons;