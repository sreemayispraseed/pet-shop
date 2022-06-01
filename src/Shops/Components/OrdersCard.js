import React from 'react'
import '../../CSS/Shop/OrderCards.css'
import API_url from '../../Services/API_url'

const OrdersCard = ({petName, petBreed, petPrice, orderId, date, userName, phone}) => {

    const deleteOrder = () => {
        
        fetch(API_url + `/order-delete/${orderId}`)
        .then(res => res.json())
        .then(result => console.log(result))
    }

    return (
        <div className = "Order-card">
            <div className = "order-card">
                <div className = "order-details">
                    <div className = "order-pet">
                        <img src="" alt="" />
                        <div>
                            <h2>Name : {petName}</h2>
                            <h2>Breed : {petBreed}</h2>
                        </div>
                    </div>
                    <div className = "order-status">
                        <h1>Status :</h1>
                        <h1 className = "pending">Pending</h1>
                    </div>
                </div>
                <div className = "custm-details">
                    <h1>Customer Details</h1>
                    <div>Ordered on :{date} </div>
                </div>
            </div>
            <div className = "order-chat">
                <div>
                    <h2>Name : {userName}</h2>
                    <h2>Phone No : {phone}</h2>
                </div>
                <button onClick = {deleteOrder} >Done</button>
            </div>
        </div>
    )
}

export default OrdersCard
