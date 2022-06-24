import React from 'react'
import profilePic from '../Image/Profile.jpg'
import logo from "../Image/logo.svg"

export default function Info (){
    return(
        <div className='info'>
            <nav>
            <img src={profilePic} alt="profile pic"/>
            </nav>
        
            <h1>Ddiiro Joseph</h1>
            <h3>Frontend Developer</h3>

            <div>
                <button>
                    <img src={logo} alt="email"/>
                    <h5>Email</h5>
                </button>
                <button>
                    <img src={logo} alt="linkedin"/>
                    <h5>Linkedin</h5>
                </button>
            </div>
        </div>
    )
}