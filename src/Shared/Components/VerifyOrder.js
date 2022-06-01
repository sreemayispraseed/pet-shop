import React from 'react'
import '../../CSS/Shared/VerifyOrder.css'
import postData from '../../Services/postData'
import { useHistory } from 'react-router'

const VerifyOrder = ({Close, Sname, Pname, Pbreed, Pprice, userName, phone}) => {

    const history = useHistory();
    const today = new Date()
    let date =today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

    const conformOrder = () => {
        const data = {
            Sname,
            Pname,
            Pbreed,
            Pprice,
            userName,
            phone,
            date
        }
        postData('/orders', data)
        .then((result) =>{
            console.log(result);
        if(result.status){
            localStorage.removeItem("token");
            history.push('/user')
        }
        })
    }

    return (
        <div className = "verify-order">
            <div className = "order-container">
                <h1>Conform Adoption</h1>
                <div className = "closebt">
                    <button  onClick = {() => Close(false)} >X</button>
                </div>
                </div>
            <div className = "order-dtls">
                    <div>
                        <h3>Shop Name : {Sname}</h3>
                    </div>
                    
                    <h3>Pet Name : {Pname}</h3>
                    <h3>Pet Breed : {Pbreed}</h3>
                    <h3>Pet Price : {Pprice}</h3>
                    <h3>User Name : {userName}</h3>
                    <h3> Phone No : {phone}</h3>
                    <button onClick = {conformOrder} >CONFORM</button>
            </div>
        </div>
    )
}

export default VerifyOrder
