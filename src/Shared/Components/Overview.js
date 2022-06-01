import React from 'react'
import '../../CSS/Shared/Overview.css'
import Button from './Button'
import vector1 from '../../Images/Vector1.png'
import vector2 from '../../Images/Vector.png'
import { useHistory } from 'react-router'

const Overview = () => {
    const history = useHistory()   
    return (
         <div className = "Overview">
            <div className = "Overview-b">
                <h1 className = "logo">Companion</h1>
                <h2>The most trusted online pet adoption site </h2>
                <div className = "Button">
                    <Button text = "Owner" onClick = {() => {history.push("/shops")}} />
                    <Button text = "User" onClick = {() => {history.push("/user")}} />
                </div>
                
            </div>
            <div className = "Overview-p">
                <img className = "Vector1" src={vector1} alt="" />
                <img className = "Vector2" src={vector2} alt="" />
                <p>Money can buy you a fine dog,
                    but only love can make him wag his tail</p>  
            </div>
        </div>
    )
}

export default Overview
