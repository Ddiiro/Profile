import React from "react"
import Twitter from "../Image/Twitter.png"
import Facebook from "../Image/Facebook.png"
import Instagram from "../Image/Instagram.png"
import Github from "../Image/Git.png"

export default function Footer(){
    return(
        <div className="footer">
            <img width="30px" src={Twitter} alt="twitterPage"/>
            <img width="30px"src={Facebook} alt="facebookPage"/>
            <img width="30px" src={Instagram} alt="instagramPage"/>
            <img width="30px" src={Github} alt="githubPage"/>
        </div>
    )
}

