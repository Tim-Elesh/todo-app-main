import { useState } from "react"

function Create({ addTodo }){
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
}

 
    return(
        <div className='todo-create text-xl'>
          <form onSubmit={handleSubmit}>
          <label className="flex bg-white h-16 justify-between px-3 rounded">
            <input className="" type="checkbox"></input>
            <input type='text' 
                   placeholder='Create a new todo...'
                   value={text}
                   onChange={(e) => setText(e.target.value)}
            >
            </input>
          </label>
          </form>
        </div>
    )
}

export default Create 

