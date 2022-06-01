import React from 'react'
import '../../CSS/Shared/Menu.css'
import image1 from '../../Images/Home1.png'
import { useHistory } from 'react-router'

const Menu = ({isOpen, shopName, shopImage}) => {

    const history = useHistory()
    let img = image1
    let image = `http://localhost:5000/images/${shopImage}`


    const logOut = () =>{
        localStorage.removeItem("token");
        history.push("/login");
    }

    return (
        <div className = { isOpen ? "MenuClose": "MenuOpen"}>
            <div className = "menu-details">
                <img className = "menu-pic" src = {shopImage ? image : img} alt = "" /> 
                <h3>{shopName}</h3>
            </div>
            <div className = "menu-options">
                <button onClick = {() => history.push(`/profile`)} >PROFILE</button>
                <button onClick = {() => history.push(`/mypets`)}>MY PETS</button>
                <button onClick = {() => history.push(`/orders`)} >MY ORDERS</button>
            </div>
            <button className = "lg-bt" onClick = {logOut} >LOGOUT</button>
        </div>
    )
}


export default Menu
