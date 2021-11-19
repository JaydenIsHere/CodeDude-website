import React from 'react'
import './docs.css'
import docs from '../images/docs.png'
import {Link} from 'react-router-dom'
const Docs = () => {
    return (
        <>
       <section className='docs-head bg-primary py-3'>
        <div className="container grid">
<div>
<h1 className='xl'>Docs</h1>
<p class='lead'>
   Learn how to work with the CodeDude platform
</p>
</div>
<img src={docs} alt="" />
             </div>
        </section> 

        {/* Docs main */}
        <section className="docs-main my-4">
            <div className="container grid">
                {/* 1st grid */}
                <div className="card bg-grey p-3">
                    <h3 className="my-2">Essentials</h3>
                    <nav>
                        <ul>
                            <li> <Link to='#' >Introduction</Link></li>
                            <li> <Link to='#'>About CodeDude</Link></li>
                            <li> <Link to='#'>Installation</Link></li>
                        </ul>
                    </nav>

                    <h3 className="my-2">Deployment</h3>
                    <nav>
                        <ul>
                            <li> <Link to='#'>Setting up a container</Link></li>
                            <li> <Link to='#'>Using the CLI</Link></li>
                            <li> <Link to='#'>Managing resources</Link></li>
                            <li> <Link to='#'>Upgrade and downgrade</Link></li>
                        </ul>
                    </nav>
                </div>
               {/* 2nd grid */}
               <div className="card">
                   <h2>Introduction</h2>
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sint tempore voluptatibus nostrum deleniti illo quia, accusantium cumque enim veritatis maiores officiis quasi error ea a iste quibusdam natus? Rem?</p>
                   <div className="alert alert-success">
                       <i className="fas fa-info"></i>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   </div>
                   <h3>Lorem, ipsum dolor.</h3>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit odio esse numquam quas sed, nesciunt aliquam consequatur unde culpa porro.</p>

                   <Link to ='#' className='btn btn-primary'>Install CLI</Link>

                   <h3>Requirements</h3>
                   <ul>
                       <li>Windows 10, Mac OSX Linux</li>
                       <li>Node.js v12 or higher</li>
                   </ul>

                   <h3>Install</h3>
                   <p>Mac (Homebrew)</p>
                   <pre><code>$ brew install CodeDude-CLI</code></pre>
                   <p>NPM</p>
                   <pre><code>$ npm install CodeDude-CLI</code></pre>
                   <p>Yarn</p>
                   <pre><code>$ yarn install CodeDude-CLI</code></pre>

               </div>
            </div>
        </section>
        </>
    )
}

export default Docs
