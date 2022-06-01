import React from 'react'
import '../../CSS/Shared/Header.css'
import { useState } from 'react'
import Menu from './Menu'
import { useHistory } from 'react-router'

const Header = ({shopName, shopImage}) => {

   
    const [open, setOpen] = useState(false);
    const history = useHistory()

    const call = () => {
        setOpen(!open)
    }

    return (
        <div className = "Header">
            <div  className = {open? "z" :"m"} onClick = {call}> 
                <Menu isOpen = {open} shopName = {shopName} shopImage = {shopImage} />
            </div>
            <h1 onClick = {() => history.push('/')} >Companion</h1>
            
        </div>
    )
    
}


export default Header
