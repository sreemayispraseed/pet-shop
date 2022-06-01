import React, { useEffect, useState } from 'react'
import '../../CSS/User/User.css'
import Header from '../../Shared/Components/Header'
import Card from '../Components/Card'
import ShopCard from '../../Shops/Components/ShopCard'
import API_url from '../../Services/API_url'

const User = () => {

    const [pets, setPets] = useState([])
    const [shops, setShops] = useState([])
    const [location, setLocation] = useState("")
    
    useEffect(() => {
        fetch(API_url + '/pets')
        .then(res => res.json())
        .then(result => setPets(result))
    }, [])

    useEffect(() => {
        fetch(API_url + '/shops')
        .then(res => res.json())
        .then(result => setShops(result))
    }, [])

    return (
        <div className = "User">
            <Header />
            <input className = "search-pin" type="text" placeholder = "Enter Pin" value = {location} onChange = {(e) => {setLocation(e.target.value)}}/>
            <h2 className = "featured-title" >Featured Pets</h2>
            <div className="cards-pets">
                {pets.map((pet) => {if(pet.petPrice >= 25000) return  <Card key = {pet.petName} name = {pet.petName} petImage = {pet.petImage} breed = {pet.petBreed}  price = {pet.petPrice} age = {pet.petAge} /> }) }
            </div>
            <h2 className = "shop-title">Our Shops</h2>
            <div className="cards-shops">
                {shops.filter((shop) => {if(location === ""){return shop} else if(location === shop.pin){return shop}}).map((shop) => <ShopCard key = {shop.shopName} name = {shop.shopName} shopImage = {shop.shopImage} info = {shop.phone} location = {shop.shopLocation} />) }
            </div>
            
        </div>
    )
}

export default User
