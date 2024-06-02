import Counter from "./Todo-counter";
import Sort from "./Todo-sort";

function Buttons(){
    return(
        <div className='todo-buttons flex justify-between text-gray-400 bg-white p-5'>
            <Counter/>
            <Sort/>
            <button>Clear Completed</button>
        </div>
    )
}

export default Buttons;