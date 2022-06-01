import React, { useState } from 'react'
import '../CSS/Shared/PopUp.css'
import { useHistory } from 'react-router'
import postData from '../Services/postData'

const PopUp = ({Close}) => {

    const history = useHistory()
    const [shopName, setShopName] = useState("")
    const [shopLocation, setShopLocation] = useState("")
    const [pin, setPin] = useState("")

    const submitCall = (e) => {
        e.preventDefault()
        const data = {
            shopName: shopName,
            shopLocation: shopLocation,
            pin: pin
        }
        if(data == null)
            console.log("err");
        else
            postData('/shop/update', data)
            .then((result) =>{
                console.log(result);
                if(result.status)
                    history.push(`/mypets`)

        })
    }

    return (
        <div className = "popUp-open" >
            <div className = "popup-details">
                <div className = "close-bt">
                    <button  onClick = {() => Close(false)} >X</button>
                </div>
                <form className="edit-form" onSubmit = {submitCall} >
                    <label htmlFor = "shop-name" >
                        <input type="text" name = "shop-name" value = {shopName}  placeholder = "Shop Name" onChange = {(e) => {setShopName(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "shop-location" >
                        <input type="text" name = "shop-location" value = {shopLocation} placeholder = "Shop Location" onChange = {(e) => {setShopLocation(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "pin" >
                        <input type="text" name = "pin" value = {pin} placeholder = "Pin" onChange = {(e) => {setPin(e.target.value)}} />
                    </label>
                
                    <button type = "submit"  > SUBMIT</button>
                </form>
            </div>
            
        </div>
    )
}

export default PopUp
