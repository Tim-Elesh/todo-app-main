import moon from "./images/icon-moon.svg";
import { useState } from "react";

function Header(){
    const [backgroundImage, setBackgroundImage] = useState('url(./components/images/bg-desktop-light.jpg)');

    const handleClick = () =>{
        if(backgroundImage === 'url(./components/images/bg-desktop-light.jpg)'){
            setBackgroundImage('url(./components/images/bg-desktop-dark.jpg)');
        } else {
            setBackgroundImage('url(./components/images/bg-desktop-light.jpg)');
        }
    }

    return(
        <div className='todo-header justify-between'>
            <h2 className='todo-inscription text-white text-4xl font-semibold'>TODO</h2>
            <button><img onClick={handleClick} src={moon} alt="switch to dark theme" /></button>
        </div>
    )
}

export default Header;