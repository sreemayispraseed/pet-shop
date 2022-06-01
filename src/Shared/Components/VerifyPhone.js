import React, { useState } from 'react'
import '../../CSS/Shared/EnterOtp.css'
import postData from '../../Services/postData'
import VerifyOrder from './VerifyOrder'


const VerifyPhone = ({Close , Sname, Pname, Pbreed, Pprice , userName, phone}) => {

    const [otp, setOtp] = useState("")
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);


    const otpCall = (e) => {
        e.preventDefault()
        const data = {
            otp: otp,
            phone
        }
        postData('/placeorder/otp-verification', data)
        .then((result) =>{
            localStorage.setItem('token',result.token)
            setError(result)
            if(result.status)
            setOpen(!open)
        })
    }

    return (
        <div className = "OTP">
            { open && <VerifyOrder Close = {setOpen} Sname = {Sname} Pname = {Pname} Pbreed = {Pbreed} Pprice= {Pprice} userName = {userName} phone = {phone} />}
            <div className = "closebt">
                <button  onClick = {() => Close(false)} >X</button>
            </div>
            <div className = "details-a">
                <h1>Enter OTP</h1>
                <div className = {!error ? 'error-t' : 'error'} >{error.data}</div>
                <h3>Check your phone for OTP</h3>
                <form className = "OTP-form">
                    <label htmlFor = "otp" >
                        <input type="text" name = "otp" value = {otp} placeholder = "OTP" onChange = {(e) => {setOtp(e.target.value)}} />
                    </label>
                </form>
                <button onClick = {otpCall} >Verify</button>
            </div>
        </div>
    )
}

export default VerifyPhone
