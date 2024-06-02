function Sort(){
    return(
        <div className='todo-sort justify-center pl-6 rounded-md'>
            <button className="All-button pr-2 focus:text-blue-600">All</button>
            <button className="Active-button px-1 focus:text-blue-600">Active</button>
            <button className="Complete-button pl-2 focus:text-blue-600">Completed</button>
        </div>
    )
}

export default Sort