import React from 'react'
import Image from './components/profile.jpg'

function Home (){
    return (

        <div className = "homenav">
             <h4 className = "adimin">Profile</h4>
             <img src={Image} alt="profile picture"  className= "profile_picture"/>
        </div>
       

    )
}

export default Home