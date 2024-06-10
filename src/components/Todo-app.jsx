import Header from './Todo-header';
import Main from './Todo-main';

export default function TodoApp(){
    return(
        <div className='todo-app mx-auto w-1/3'>
            <div className='todo-container flex-col mt-24'>
            <Header></Header>
            <Main></Main>
            </div>
        </div>
    )
}