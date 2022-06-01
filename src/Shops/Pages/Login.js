import React from 'react'
import '../../CSS/Shop/Login.css'
import { useState } from 'react'
import { useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'
import Image from '../../Images/profile2.png'
import Image1 from '../../Images/lock.png'
import postData from '../../Services/postData'
import ForgetPassword from '../../Shared/ForgetPassword'

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);


    const LoginCall = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }
        postData('/login', data)
        .then((result) =>{
            localStorage.setItem('token',result.token)
            setError(result)
            if(result.status)
                history.push('/profile')
        })
    }

    return (
        <div className = "Login">
            <Header />
            { open && <ForgetPassword isClose = {setOpen} />}
            <div className = "login-page">
                <h2>LOGIN</h2>
                <div className = {!error ? 'error-t' : 'error'} >{error.data}</div>
                <form className = "login-form" onSubmit = {LoginCall}>
                    <label htmlFor = "email" >
                        <img src = {Image} alt="" />
                        <input type="email" name = "email" value = {email} placeholder ="Email" onChange = {(e) => {setEmail(e.target.value)}} />
                    </label>
                    <label htmlFor = "password" >
                        <img src = {Image1} alt="" />
                        <input type="password" name = "password" value = {password} placeholder = "Password" onChange = {(e) => {setPassword(e.target.value)}} />
                    </label>
                    <div className = "forget-password">
                        <h5>FORGET PASSWORD ? </h5> 
                        <h5 className = "click-here" onClick = {() => {setOpen(true)}}> CLICK HERE</h5>
                        <button type = "submit" >LOGIN</button>
                    </div>
                    <div className = "create-account">
                        <h5>CREATE AN ACCOUNT ? </h5> 
                        <h5 className = "click-here" onClick = {() => history.push(`/signup`)}> CLICK HERE</h5>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
