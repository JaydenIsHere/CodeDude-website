import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer bg-dark py-5'>
            <div className="container grid grid-3">
                <div>
                    <h1>CodeDude</h1>
                    <p>Copyright &copy; 2020</p>
                </div>

                <nav>
                     <ul>
                         <li> <Link to="/">Home</Link></li>
                         <li> <Link to="/feature">Feature</Link></li>
                         <li> <Link to="/docs">docs</Link></li>
                     </ul>
                 </nav>

                 <div className="social">
                     <Link to='#'> <i className='fab fa-github fa-2x'></i> </Link>
                     <Link to='#'> <i className='fab fa-facebook fa-2x'></i> </Link>
                     <Link to='#'> <i className='fab fa-instagram fa-2x'></i> </Link>
                     <Link to='#'> <i className='fab fa-twitter fa-2x'></i> </Link>
                 </div>
                 

            </div>
        </footer>
    )
}

export default Footer
