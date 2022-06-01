import React, { useState } from 'react'
import { useHistory } from 'react-router'
import '../../CSS/Shared/ResetPassword.css'
import postData from '../../Services/postData'

const ResetPassword = ({isClose, phone}) => {

    const [password, setPassword] = useState("")
    const [conformPassword, setConformPassword] = useState("")
    const history = useHistory()
    const [error, setError] = useState(false);

    const resetCall = (e) => {
        const data = {
            password: password,
            conformPassword: conformPassword,
            phone
        }
        if(password !== conformPassword)
            setError(!error)
        else
            postData('/forgotpassword/password-reset', data)
            .then((result) =>{
                console.log(result);
            if(result.status){
                localStorage.removeItem("token");
                history.push('/shops')
            }
            
        })
    }

    return (
        <div className = "reset-password">
            <div className = "closebt">
                <button  onClick = {() => isClose(false)} >X</button>
            </div>
            <div className = "details-a">
                <h1>New Password</h1>
                <div className = {!error ? 'error-t' : 'error'} >Password not match</div>
                <p>Please enter new password which is not used else where</p>
                <input type="password" name = "password" value = {password} placeholder = "New Password" onChange = {(e) => {setPassword(e.target.value)}} />
                <input type="password" name = "conform-password" value = {conformPassword} placeholder = "Conform New Password" onChange = {(e) => {setConformPassword(e.target.value)}} />
                <button onClick = {resetCall} >Change</button>
            </div>
        </div>
    )
}

export default ResetPassword
