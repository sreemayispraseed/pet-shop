import React, { useState } from 'react'
import '../../CSS/User/SignIn.css'
import Image1 from '../../Images/profile2.png'
import Image3 from '../../Images/phone.png'
import VerifyPhone from '../../Shared/Components/VerifyPhone'
import postData from '../../Services/postData'

const SignIn = ({Close , Sname , Pname , Pbreed , Pprice}) => {
    
    const [userName, setUserName] = useState("")
    const [phone, setPhone] = useState("")
    const [open, setOpen] = useState(false);

    const signInCall = (e) => 
    {
        e.preventDefault()
        const data = {
            userName: userName,
            phone: phone,
        }
        postData('/placeorder', data)
        .then((result) =>{
            console.log(result);
        if(result.status)
            setOpen(true)
        })
    }

    return (
        <div className = "SignIn">
            { open && <VerifyPhone Close = {setOpen} Sname = {Sname} Pname = {Pname} Pbreed = {Pbreed} Pprice= {Pprice} userName = {userName} phone = {phone} />}
            <div className = "signin-page">
                <div className = "closebt">
                    <button  onClick = {() => Close(false)} >X</button>
                </div>
                <h1>SIGN IN</h1>
                <form className="signin-form">
                    <label htmlFor = "user-name" >
                        <img src = {Image1} alt="" />
                        <input type="text" name = "user-name" value = {userName} placeholder = "User Name" onChange = {(e) => {setUserName(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "phone" >
                        <img src = {Image3} alt="" />
                        <input type="text" name = "phone" value = {phone} placeholder = "Phone" onChange = {(e) => {setPhone(e.target.value)}} />
                    </label>    
                    <button type = "submit" onClick = {signInCall} > SUBMIT</button>
                </form>
                
            </div>
        </div>
    )
}

export default SignIn
