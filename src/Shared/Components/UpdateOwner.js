import React, { useState } from 'react'
import '../../CSS/Shared/UpdateOwner.css'
import postData from '../../Services/postData'
import UpdateVerify from './UpdateVerify'

const UpdateOwner = ({Close ,shopId }) => {
    
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [open, setOpen] = useState(false);

    const updateCall = (e) => 
    {
        e.preventDefault()
        const data = {
            phone: phone,
            shopId
        }
        postData('/shop/user-update', data)
        .then((result) =>{
        if(result.status)
            setOpen(true)
        })
    }

    return (
        <div className = "UpdateOwner">
            { open && <UpdateVerify Close = {setOpen} phone = {phone} email = {email} />}
            <div className = "signin-page">
                <div className = "closebt">
                    <button  onClick = {() => Close(false)} >X</button>
                </div>
                <h1>Update Owner</h1>
                <form className="signin-form">
                    <label htmlFor = "email" >
                        <input type="text" name = "email" value = {email} placeholder = "Email" onChange = {(e) => {setEmail(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "phone" >
                        <input type="text" name = "phone" value = {phone} placeholder = "Phone" onChange = {(e) => {setPhone(e.target.value)}} />
                    </label>    
                    <button type = "submit" onClick = {updateCall} > SUBMIT</button>
                </form>
                
            </div>
        </div>
    )
}

export default UpdateOwner
