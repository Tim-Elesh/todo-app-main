function Create(){
    return(
        <div className='todo-create text-xl'>
          <label className="flex bg-white h-16 justify-between px-3 rounded">
            <input className="" type="checkbox"></input>
            <input type='text' placeholder='Create a new todo...'></input>
          </label>
        </div>
    )
}

export default Create 