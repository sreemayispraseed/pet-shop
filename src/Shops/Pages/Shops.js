import React from 'react'
import '../../CSS/Shop/Shops.css'
import Button from '../../Shared/Components/Button'
import Header from '../../Shared/Components/Header'
import Image from '../../Images/profile1.png'
import { useHistory } from 'react-router'

const Shops = () => {

    const history = useHistory();
    const token = localStorage.getItem('token')

    const login = () => {
        if(token)
            history.push('/profile')
        else
        history.push(`/login`)
    }

    return (
        <div className = "shop-overview">
            <Header />
            <div className = "shop-main">
                <Button text = "LOGIN" image = {Image} onClick = {login} />
                <Button text = "SIGNUP" image = {Image} onClick = {() => {history.push(`/signup`)}} />
            </div>
            
        </div>
    )
}

export default Shops
