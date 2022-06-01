import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../../Shared/Components/Header'
import Card from '../../Users/Components/Card'
import API_url from '../../Services/API_url'
import image1 from '../../Images/story1.png'
import '../../CSS/Shop/Shop.css'

const Shop = () => {
    const params = useParams()
    const sname = params.name
    const [shop, setShop] = useState([])
    const [pets, setPets] = useState([])
    const [breed, setBreed] = useState("")

    let img = image1
    let shopImage = shop.shopImage
    let image = `http://localhost:5000/images/${shopImage}`

    useEffect(() => {
        fetch(API_url + `/shop/${sname}`)
        .then(res => res.json())
        .then(result => setShop(result))
    },[])

    useEffect(() => {
        fetch(API_url + `/shops/pet/${sname}`)
        .then(res => res.json())
        .then(result => setPets(result))
    },[])
    return (
        <div className = "Shop">
            <Header />
            <h1 className = "heading">{shop.shopName}</h1>
            <div className = "shop-dtls">
                <div className="contact-details">
                    <h3>Location : {shop.shopLocation}</h3>
                    <h3>Email : {shop.email}</h3>
                    <h3>Phone No :{shop.phone}</h3>
                </div>
                <img src = {shopImage ? image : img} alt = "" />
            </div>
            <input className = "search-pet" type="text" placeholder = "Search by pet breed" value = {breed} onChange = {(e) => {setBreed(e.target.value)}}/>
            <div className = "shop-pets">
                {pets.filter((pet) => {if(breed === ""){return pet} else if(pet.petBreed.toLowerCase().includes(breed.toLocaleLowerCase())){return pet}}).map((pet) => <Card key = {pet.petName}  name = {pet.petName} petImage = {pet.petImage} breed = {pet.petBreed}  price = {pet.petPrice} age = {pet.petAge} />) }
            </div>
        </div>
    )
}

export default Shop
