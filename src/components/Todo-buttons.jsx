import Counter from "./Todo-counter"
import Sort from "./Todo-sort"

function Buttons(){
    return(
        <div className='todo-buttons'>
            <Counter/>
            <Sort/>
            <button>Clear Completed</button>
        </div>
    )
}