import React, { useEffect, useState } from 'react'
import '../../CSS/Shop/Profile.css'
import { Redirect, useHistory } from 'react-router'
import Header from '../../Shared/Components/Header'
import API_url from '../../Services/API_url'
import PopUp from '../../Shared/PopUp'
import image1 from '../../Images/Home1.png'
import FileUpload from '../../Services/FileUplod'
import postData from '../../Services/postData'
import UpdateOwner from '../../Shared/Components/UpdateOwner'

const Profile = () => {

    const history = useHistory()
    const [profile, setProfile] = useState([])
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState(false);
    const token = localStorage.getItem('token')
    const [imageUrl, setImageUrl] = useState("")
    const [selectedImage, setSelectedImage] = useState("")

    const url = imageUrl.url
    let img = image1
    let image = `http://localhost:5000/images/${profile.shopImage}`

    useEffect(() => {
        if(token)
            return fetch(API_url + `/profile`,{headers: {'authorization': token}})
                    .then(res => res.json())
                    .then(result => setProfile(result))
    },[])

    if(!token)
        return <Redirect to = '/'/>

    const upload = () => {
        const formData = new FormData()
            formData.append('files', selectedImage)
        FileUpload('/imageupdate', formData)
    }
    
    const logOut = () =>{
        localStorage.removeItem("token");
        history.push("/login");
    }

    return (
        <div className = {"Profile"}>
            <Header shopName = {profile.shopName} shopImage = {profile.shopImage} />
            { open && <PopUp Close = {setOpen} />}
            { update && <UpdateOwner Close = {setUpdate} shopId = {profile._id} />}
            <div className =  "profile">
                <div className = "profile-button">
                    <div className = "shop-details">
                        <img className = "shop-pic" src = { profile.shopImage? image : img} alt = "" /> 
                        <h3>{profile.shopName}</h3>
                    </div>
                    <div className = "options">
                        <button className = "bt" >PROFILE</button>
                        <button onClick = {() => history.push(`/mypets`)}>MY PETS</button>
                        <button onClick = {() => history.push(`/orders`)} >MY ORDERS</button>
                    </div>
                    <button className = "lg-bt" onClick = {logOut} >LOGOUT</button>
                </div>
                <div className = "profile-details">
                    <div className = "details">
                        <h1>PROFILE</h1>
                        <h2 className = "basic-details">BASIC DETAILS</h2>
                        <div className = "details-shop">
                           <div>
                            <h2>NAME : {profile.shopName} </h2>
                            <h2>PHONE : {profile.phone} </h2>
                            <h2>EMAIL : {profile.email} </h2>
                            <h2>PIN : {profile.pin} </h2>
                           </div>
                           <button onClick = {() => setOpen(!open)} className = "edit-btopen"  >EDIT</button>
                        </div>
                        <div className = "update-cntr">
                            <h4>Update Shop Owner</h4>
                            <button className = "update-shp" onClick = {() => setUpdate(!update)}>Update</button>
                        </div>
                        
                    </div>
                    <div className = "profile-image">
                        <input type = "file" files = {selectedImage} onChange = {(e) => setSelectedImage(e.target.files[0]) } />
                        <button onClick = {upload} className = "upload-btn" >Change Image</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile
