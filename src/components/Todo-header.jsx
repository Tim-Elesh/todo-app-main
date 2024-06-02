import moon from "./images/icon-moon.svg";

function Header(){
    return(
        <div className='todo-header justify-between'>
            <h2 className='todo-inscription text-white text-4xl font-semibold'>TODO</h2>
            <button><img src={moon} alt="switch to dark theme" /></button>
        </div>
    )
}

export default Header;