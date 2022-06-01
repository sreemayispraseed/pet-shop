import React, { useState } from 'react'
import '../../CSS/Shared/PopUpPet.css'
import postData from '../../Services/postData'

const PopUpPet = ({Close, pid}) => {

    const [petName, setPetName] = useState("")
    const [petAge, setPetAge] = useState("")
    const [petBreed, setPetBreed] = useState("")
    const [petDescription, setPetDescription] = useState("")
    const [petPrice, setPetPrice] = useState("")

    const petUpdateCall = () => 
    {
        const data = {
            petName: petName,
            petBreed: petBreed,
            petAge: petAge,
            petDescription: petDescription,
            petPrice: petPrice,
            pid
        }
        postData('/pet/update', data)
        .then((result) =>{
            console.log(result);
        })
    }


    return (
        <div className = "popUpPet-open" >
            <div className = "popuppet-details">
                <div className = "close-bt">
                    <button  onClick = {() => Close(false)} >X</button>
                </div>
                <form className="edit-form"  onSubmit = {petUpdateCall} >
                    <label htmlFor = "pet-name" >
                        <input type="text" name = "shop-name" value = {petName}  placeholder = "Pet Name" onChange = {(e) => {setPetName(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "pet-age" >
                        <input type="text" name = "shop-location" value = {petAge} placeholder = "Pet Age" onChange = {(e) => {setPetAge(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "pet-breed" >
                        <input type="text" name = "pin" value = {petBreed} placeholder = "Pet Breed" onChange = {(e) => {setPetBreed(e.target.value)}} />
                    </label>

                    <label htmlFor = "pet-description" >
                        <input type="text" name = "pet-description" value = {petDescription} placeholder = "Description" onChange = {(e) => {setPetDescription(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "pet-price" >
                        <input type="text" name = "pet-price" value = {petPrice} placeholder = "Price" onChange = {(e) => {setPetPrice(e.target.value)}} />
                    </label>
                
                    <button type = "submit"  > SUBMIT</button>
                </form>
            </div>
            
        </div>
    )
}

export default PopUpPet
