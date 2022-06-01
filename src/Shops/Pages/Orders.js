import React, { useEffect, useState } from 'react'
import '../../CSS/Shop/Order.css'
import {  Redirect, useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'
import image1 from '../../Images/Home1.png'
import OrdersCard from '../Components/OrdersCard'
import API_url from '../../Services/API_url'

const Orders = () => {

    const history = useHistory()
    const token = localStorage.getItem('token')
    const [orders, setOrders] = useState([])
    const [profile, setProfile] = useState([])
    let img = image1
    let shopImage = profile.shopImage
    let image = `http://localhost:5000/images/${shopImage}`

    useEffect(() => {
        if(token)
            return fetch(API_url + `/myorders`, {headers: {'authorization': token}})
                    .then(res => res.json())
                    .then(result => setOrders(result))
        
    },[])

    useEffect(() => {
        if(token)
            return fetch(API_url + `/profile`,{headers: {'authorization': token}})
                    .then(res => res.json())
                    .then(result => setProfile(result))
    },[])

    if(!token)
        return <Redirect to = '/'/>

    const logOut = () =>{
        localStorage.removeItem("token");
        history.push("/login");
    }

    return (
        <div className = "Orders">
            <Header  shopName = {profile.shopName}/>
            <div className = "orders">
                <div className = "profile-button">
                    <div className = "shop-details">
                        <img className = "shop-pic" src = {shopImage ? image : img} alt = "" /> 
                        <h3>{profile.shopName}</h3>
                    </div>
                    <div className = "options">
                        <button onClick = {() => history.push(`/profile`)} >PROFILE</button>
                        <button onClick = {() => history.push(`/mypets`)}>MY PETS</button>
                        <button className = "bt" >MY ORDERS</button>
                    </div>
                    <button className = "lg-bt" onClick = {logOut} >LOGOUT</button>
                </div>
                <div className = "orders-details">
                    <h1 className ="order-h">ORDERS</h1>
                    <div className = "orders-card">
                        {orders.map((order) => <OrdersCard key = {order._id} orderId = {order._id} petName = {order.petName} date = {order.date} petBreed = {order.petBreed}   petPrice = {order.petPrice} userName = {order.userName} phone = {order.phone} />) }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Orders
