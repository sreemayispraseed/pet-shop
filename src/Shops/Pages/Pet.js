import React, { useEffect, useState } from 'react'
import '../../CSS/Shop/Pet.css'
import Button from '../../Shared/Components/Button'
import Header from '../../Shared/Components/Header'
import image1 from '../../Images/puppy.png'
import API_url from '../../Services/API_url'
import { useParams } from 'react-router'
import SignIn from '../../Users/Pages/SignIn'

const Pet = () => {

    const idd = useParams()
    const pid = idd.name
    const [pet, setPet] = useState([])
    const [open, setOpen] = useState(false);
    const Sname = pet.shopOwner
    let img = image1
    let petImage = pet.petImage
    let image = `http://localhost:5000/images/${petImage}`


    useEffect(() => {
        fetch(API_url + `/pet/${pid}`)
        .then(res => res.json())
        .then(result => setPet(result))
    },[])
    

    return (
        <div className = "pets-details">
            <Header />
            { open && <SignIn Close = {setOpen} Sname = {Sname} Pname = {pet.petName} Pbreed = {pet.petBreed} Pprice = {pet.petPrice} />}
            <div className="pet">
                <div className = "pets-info">
                    <div className="p-image">
                        <img src = {petImage ? image : img} alt = "" />
                    </div>
                    <div className="pet-header">
                        <h2>Name  : {pet.petName}  </h2>
                        <h4>Age  : {pet.petAge} </h4>
                        <h4>Breed  : {pet.petBreed} </h4>
                        <div className = "Catagory">
                            <h4 className = "catagory">CATEGORY</h4>
                            <h4>{pet.petBreed}</h4>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h5>Price : {pet.petPrice}</h5>
                </div>
                <div className = "About-me">
                    <h1>ABOUT MY STORY</h1>
                    <h6>{pet.petDescription}</h6>
                </div>
                <Button text = "ADOPT " onClick = {() => setOpen(true)} />
            </div>
        </div>
    )
}

export default Pet
