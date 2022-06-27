import React from 'react'
import profilePic from '../Image/Profile.jpg'
import email from "../Image/email.png"
import linkedin from "../Image/Linkedin.png"

export default function Info (){
    return(
        <div className='info'>
            <nav>
            <img src={profilePic} alt="profile pic"/>
            </nav>
            <div className='details'>
            <h1>Ddiiro Joseph</h1>
            <h3>Frontend Developer</h3>
            <h5>ddiiro92@gmail.com</h5>
            </div>
            

            <div className='contact'>
                <button className='email'>
                    <img src={email} alt="email"/>
                    Email
                </button>
                <button>
                    <img src={linkedin} alt="linkedin"/>
                    Linkedin
                </button>
            </div>
        </div>
    )
}