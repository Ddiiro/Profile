import React from "react"
import Twitter from "../Image/logo.svg"
import Facebook from "../Image/logo.svg"
import Instagram from "../Image/logo.svg"
import Github from "../Image/logo.svg"

export default function Footer(){
    return(
        <div>
            <img width="50px" src={Twitter} alt="twitterPage"/>
            <img width="50px"src={Facebook} alt="facebookPage"/>
            <img width="50px" src={Instagram} alt="instagramPage"/>
            <img width="50px" src={Github} alt="githubPage"/>
        </div>
    )
}

