import React, { useEffect, useState } from 'react'
import '../../CSS/Shop/MyPets.css'
import {  Redirect,useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'
import image1 from '../../Images/Home1.png'
import API_url from '../../Services/API_url'
import Card from '../../Users/Components/Card'

const MyPets = () => {

    const history = useHistory()
    const token = localStorage.getItem('token')
    const [pets, setPets] = useState([])
    const [profile, setProfile] = useState([])
    let img = image1
    let shopImage = profile.shopImage
    let image = `http://localhost:5000/images/${shopImage}`

    useEffect(() => {
        if (token) 
            return fetch(API_url + `/mypets`, {headers: {'authorization': token}})
                    .then(res => res.json())
                    .then(result => setPets(result))   
    },[])

    useEffect(() => {
        if (token)
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
        <div className = "Mypets">
            <Header shopName = {profile.shopName} />
            <div className = "mypets">
                <div className = "profile-button">
                    <div className = "shop-details">
                        <img className = "shop-pic" src = {shopImage ? image : img} alt = "" /> 
                        <h3>{profile.shopName}</h3>
                    </div>
                    <div className = "options">
                        <button onClick = {() => history.push(`/profile`)} >PROFILE</button>
                        <button className = "bt" >MY PETS</button>
                        <button onClick = {() => history.push(`/orders`)}>MY ORDERS</button>
                    </div>
                    <button className = "lg-bt" onClick = {logOut} >LOGOUT</button>
                </div>
                <div className = "mypets-details">
                    <div className = "mypets-h">
                        <h1>MY PETS</h1>
                        <button onClick = {() => history.push(`/add-pet`)} >Add Pets</button>
                    </div>
                    <div className = "mypets-card">
                        {pets.map((pet) => <Card key = {pet._id} pid = {pet.petid} token = {token} petImage = {pet.petImage} name = {pet.petName} breed = {pet.petBreed} petid = {pet._id} price = {pet.petPrice} age = {pet.petAge} />) }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MyPets