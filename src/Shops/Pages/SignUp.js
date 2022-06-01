import React, { useState } from 'react'
import '../../CSS/Shop/SignUp.css'
import { useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'
import Image1 from '../../Images/profile2.png'
import Image2 from '../../Images/location1.png'
import Image3 from '../../Images/phone.png'
import Image4 from '../../Images/lock.png'
import postData from '../../Services/postData'
import FileUpload from '../../Services/FileUplod'

const SignUp = () => {

    const history = useHistory()
    
    const [shopName, setShopName] = useState("")
    const [shopLocation, setShopLocation] = useState("")
    const [pin, setPin] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [conformPassword, setConformPassword] = useState("")
    const [selectedImage, setSelectedImage] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [error, setError] = useState(false);
    const [errror, setErrror] = useState(false);
    
    const url = imageUrl.url

    const signUpCall = (e) => 
    {
        e.preventDefault()
        const data = {
            shopName: shopName,
            shopLocation: shopLocation,
            pin: pin,
            email: email,
            phone: phone,
            password: password,
            conformPassword: conformPassword,
            url
        }
        if(password === conformPassword)
            setErrror(false)
        if(password !== conformPassword)
            setErrror(true)
        else
            postData('/signup', data)
            .then((result) =>{
            setError(result)
            if(result.status)
            history.push('/login');
    })
    }

    const upload = () => {
        const formData = new FormData()
            formData.append('files', selectedImage)
        FileUpload('/imageupload', formData)
        .then(result => setImageUrl(result))
    }

    return (
        <div className = "SignUp">
            <Header />
            <div className = "signup-page">
                <h2>SIGN UP</h2>
                <div className = {!error ? 'error-t' : 'error'} >{error.data}</div>
                <div className = {!errror ? 'error-t' : 'error'} >Password not match</div>
                <div className = "usr-img">
                        <input type = "file" files = {selectedImage} onChange = {(e) => setSelectedImage(e.target.files[0]) } />
                        <button onClick = {upload} >UPLOAD IMAGE</button>
                </div>
                <form className="signup-form" onSubmit = {signUpCall}>
                    <label htmlFor = "shop-name" >
                        <img src = {Image1} alt="" />
                        <input type="text" name = "shop-name" value = {shopName} placeholder = "Shop Name" onChange = {(e) => {setShopName(e.target.value)}} />
                    </label>

                    <label htmlFor = "shop-location" >
                        <img src = {Image2} alt="" />
                        <input type="text" name = "shop-location" value = {shopLocation} placeholder = "Shop Location" onChange = {(e) => {setShopLocation(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "pin" >
                        <img src = {Image1} alt="" />
                        <input type="text" name = "pin" value = {pin} placeholder = "Pin" onChange = {(e) => {setPin(e.target.value)}} />
                    </label>
               
                    <label htmlFor = "email" >
                        <img src = {Image1} alt="" />
                        <input type="email" name = "email" value = {email} placeholder ="Email" onChange = {(e) => {setEmail(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "phone" >
                        <img src = {Image3} alt="" />
                        <input type="text" name = "phone" value = {phone} placeholder = "Phone" onChange = {(e) => {setPhone(e.target.value)}} />
                    </label>    

                    <label htmlFor = "password" >
                        <img src = {Image4} alt="" />
                        <input type="password" name = "password" value = {password} placeholder = "Password" onChange = {(e) => {setPassword(e.target.value)}} />
                    </label>
                
                    <label htmlFor = "conform-password" >
                        <img src = {Image4} alt="" />
                        <input type="password" name = "conform-password" value = {conformPassword} placeholder = "Conform Password" onChange = {(e) => {setConformPassword(e.target.value)}} />
                    </label>
                
                    <button type = "submit" > SUBMIT</button>
                </form>
                <div className = "al">
                    <h5>ALREADY HAVE AN ACCOUNT?</h5> 
                    <h5 className = "signin-here" onClick = {() => history.push(`/login`)} > SIGNIN HERE</h5>
                    
                </div>
                
            </div>
        </div>
    )
}

export default SignUp
