import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                {/* we need the container as we want the element only stretch at the certain point */}
                <div className="container flex">
                
                 <h1 className='logo'>CodeDude</h1>
                 <nav>
                     <ul>
                         <li> <Link to="/">Home</Link></li>
                         <li> <Link to="/feature">Feature</Link></li>
                         <li> <Link to="/docs">docs</Link></li>
                     </ul>
                 </nav>
                 
                </div>
            </div>
        </>
    )
}

export default Navbar
