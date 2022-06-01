import React from 'react'
import Button from '../../Shared/Components/Button'
import image1 from '../../Images/story1.png'
import { useHistory } from 'react-router'

const ShopCard = ({name, info, location, shopImage}) => {
    const history = useHistory()
    let img = image1
    let image = `http://localhost:5000/images/${shopImage}`

    return (
        <div className="shops-list">
            <div className="shops-images">
                <img src = {shopImage ? image : img} alt = "" />
            </div>
            <div className="shopcard-info">
                <h3 className = "shops-name">{name}</h3>
                <h4 className = "shops-info">{info}</h4>
                <h4 className = "shops-location">{location}</h4>
                <Button text = "Shop" onClick = {() => {history.push(`/shops/${name}`)}} />
            </div>
            
        </div>
    )
}

export default ShopCard
