import React, { useState } from 'react'
import '../CSS/Shared/ForgetPassword.css'
import EnterOtp from './Components/EnterOtp'
import postData from '../Services/postData'

const ForgetPassword = ({isClose, }) => {

    const [phone, setPhone] = useState("")
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);

    const forgetCall = (e) => {
        e.preventDefault()
        const data = {
            phone: phone
        }
        postData('/forgotpassword', data)
        .then((result) =>{
            setError(result)
        if(result.status)
            setOpen(!open)
        })
    }

    return (
        <div className = "ForgetPassword">
            { open && <EnterOtp Close = {setOpen} phone = {phone} />}
            <div className = "forget-container">
                <div className = "closebt">
                    <button  onClick = {() => isClose(false)} >X</button>
                </div>
                <div className = "details-a">
                    <h1>Forget Password</h1>
                    <div className = {!error ? 'error-t' : 'error'} >{error.data}</div>
                    <h3>Enter your phone number</h3> 
                    <input type="text" name = "phone" value = {phone} placeholder = "Phone Number" onChange = {(e) => {setPhone(e.target.value)}} />
                    <button onClick = {forgetCall}  >Continue</button>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
