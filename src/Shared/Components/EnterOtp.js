import React, { useState } from 'react'
import '../../CSS/Shared/EnterOtp.css'
import ResetPassword from './ResetPassword'
import postData from '../../Services/postData'

const EnterOtp = ({Close , phone}) => {

    const [otp, setOtp] = useState("")
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);

    const otpCall = (e) => {
        e.preventDefault()
        const data = {
            otp,
            phone

        }
        postData('/forgotpassword/otp-verification', data)
        .then((result) =>{
            localStorage.setItem('token',result.token)
            setError(result)
            if(result.status)
                setOpen(true)

        })
    }

    return (
        <div className = "OTP">
            { open && <ResetPassword isClose = {setOpen}  phone = {phone} />}
            <div className = "closebt">
                <button  onClick = {() => Close(false)} >X</button>
            </div>
            <div className = "details-a">
                <h1>Enter OTP</h1>
                <div className = {!error ? 'error-t' : 'error'} >{error.data}</div>
                <h3>Check your phone for OTP</h3>
                <input type="text" name = "otp" value = {otp} placeholder = "OTP" onChange = {(e) => {setOtp(e.target.value)}} />
                <button onClick = {otpCall} >Verify</button>
            </div>
        </div>
    )
}

export default EnterOtp
