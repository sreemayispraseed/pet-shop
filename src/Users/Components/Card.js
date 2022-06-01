import React, { useState } from 'react'
import Button from '../../Shared/Components/Button'
import API_url from '../../Services/API_url'
import image1 from '../../Images/puppy.png'
import { useHistory } from 'react-router'
import PopUpPet from '../../Shared/Components/PopUpPet'

const Card = ({name, breed, price, token, pid, petImage}) => {

    const history = useHistory()
    const [open, setOpen] = useState(false);
    let img = image1
    let image = `http://localhost:5000/images/${petImage}`

    const deletePet = () => {
        
        fetch(API_url + `/pet-delete/${pid}`,{headers: {'authorization': token}})
        .then(res => res.json())
        .then(result => console.log(result))
    }
    

    return (
        <div className="featured-pet">
            { open && <PopUpPet Close = {setOpen} pid = {pid} />}
            <div className="pet-image">
                <img src = {petImage ? image : img} alt = "" /> 
            </div>
            <div className="pet-info">
                <h3 className = "pet-name">{name}</h3>
                <h4 className = "pet-breed">{breed}</h4>
                <h5 className = "pet-price">{price}</h5>
                <div className = "Am" >
                    <Button text = "Adopt Me" onClick = {() => {history.push(`/shops/pets/${name}`)}}  />
                </div>
                <div className = "btns">
                    <button className = "dlt-btn" onClick = {deletePet} >Delete</button>
                    <button className = "edt-btn" onClick = {() => {setOpen(!open)}} >Edit</button>
                </div> 
            </div>
            
        </div>
    )
}

export default Card
