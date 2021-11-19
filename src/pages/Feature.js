import React from 'react'
import server from '../images/server.png'
import server2 from '../images/server2.png'
import './feature.css'
const Feature = () => {
    return (
        <>
        <section className='feature-head bg-primary py-3'>
            <div className="container grid">
<div>
<h1 className='xl'>Features</h1>
<p class='lead'>
    Check out the feature of CodeDude that separate us from the competition
</p>
</div>
<img src={server} alt="" />
             </div>
        </section>

        <section className="feature-sub-head bg-light py-3">
            <div className="container grid">
            <div>
<h1 className='md'>The CodeDude Platform</h1>
<p >
   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et doloremque accusamus modi suscipit, dolores laborum iste, nulla omnis fugit eum illo facere nobis magni officiis ratione deserunt repudiandae quisquam.
</p>
</div>
<img src={server2} alt="" />
            </div>
        </section>

        <section className="feature-main my-2">
            <div className="container grid grid-3">

                <div className="card flex">
                    <i className="fas fa-server fa-3x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem incidunt unde corporis sit alias quisquam suscipit placeat sapiente nemo hic quia nesciunt eum, accusantium at. Suscipit quis distinctio illo animi!</p>
                </div>

                <div className="card flex">
                    <i className="fas fa-network-wired fa-3x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem incidunt unde corporis sit alias quisquam suscipit </p>
                </div>

                <div className="card flex">
                    <i className="fas fa-laptop-code fa-3x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                </div>

                <div className="card flex">
                    <i className="fas fa-database fa-3x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>
                </div>

                <div className="card flex">
                    <i className="fas fa-power-off fa-3x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>

                <div className="card flex">
                    <i className="fas fa-upload fa-3x"></i>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Feature
