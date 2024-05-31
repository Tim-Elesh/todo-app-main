import Clue from './Todo-clue'
import Buttons from './Todo-buttons'
import TaskList from './Todo-task-list'

function Tasks(){
    return(
        <div className='todo-tasks'>
            <TaskList/>
            <Buttons/>
            <Clue/>
        </div>
    )
}

export default Tasks