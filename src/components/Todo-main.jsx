import Create from "./Todo-create";
import Tasks from "./Todo-tasks";

function Main(){
    return(
        <div className='todo-main mt-10'>
            <Create/>
            <Tasks/>
        </div>
    )
}

export default Main;