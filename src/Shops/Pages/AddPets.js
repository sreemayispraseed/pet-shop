import React from 'react'
import '../../CSS/Shop/AddPets.css'
import { useState } from 'react'
import { Redirect, useHistory } from 'react-router'
import postData from '../../Services/postData'
import Header from '../../Shared/Components/Header'
import FileUpload from '../../Services/FileUplod'

const AddPets = () => {

    const [petName, setpetName] = useState("")
    const [petBreed, setpetBreed] = useState("")
    const [petAge, setpetAge] = useState("")
    const [petDescription, setpetDescription] = useState("")
    const [petPrice, setpetPrice] = useState("")
    const [selectedImage, setSelectedImage] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const url = imageUrl.url
    const token = localStorage.getItem('token')
    const history = useHistory()

    const petAddCall = (e) => 
    {
        e.preventDefault()
        const data = {
            petName: petName,
            petBreed: petBreed,
            petAge: petAge,
            petDescription: petDescription,
            petPrice: petPrice,
            petImage: url
        }
        console.log(data);
        postData('/shop/pets', data)
        .then((result) =>{
        if(result.status)
            history.push('/mypets');
        })
    }

    if(!token)
        return <Redirect to = '/'/>

    const upload = () => {
        const formData = new FormData()
            formData.append('files', selectedImage)
        FileUpload('/imageupload', formData)
        .then(result => setImageUrl(result))
    }
    
    return (
        <div className = "Add-Pet">
            <Header />
            <div className = "add-pets">
                <h2>ADD PET DETAILS</h2>
                <div className = "add-details">
                    <div className = "add-img">
                        <input type = "file" files = {selectedImage} onChange = {(e) => setSelectedImage(e.target.files[0]) } />
                        <button onClick = {upload} >UPLOAD IMAGE</button>
                    </div>
                    <form className = "add-form" onSubmit = {petAddCall}>
                        <label htmlFor="pet-name">
                            <input type="text" name = "pet-name" value = {petName} placeholder = "Pet Name" onChange = {(e) => {setpetName(e.target.value)}} />
                        </label>

                        <label htmlFor="pet-breed">
                            <input type="text" name = "pet-breed" value = {petBreed} placeholder = "Pet Breed" onChange = {(e) => {setpetBreed(e.target.value)}} />
                        </label>

                        <label htmlFor="pet-age">
                            <input type="text" name = "pet-age" value = {petAge} placeholder = "Pet Age" onChange = {(e) => {setpetAge(e.target.value)}} />
                        </label>

                        <label htmlFor="pet-price">
                            <input type="text" name = "pet-price" value = {petPrice} placeholder = "Pet Price" onChange = {(e) => {setpetPrice(e.target.value)}} />
                        </label>

                        <label htmlFor="pet-description">
                            <input type="text" name = "pet-description" value = {petDescription} placeholder = "Pet Description" onChange = {(e) => {setpetDescription(e.target.value)}} />
                        </label>

                        <button type = "submit"> SAVE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPets
