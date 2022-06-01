import React from 'react'

const Button = ({text, image, onClick }) => {
    return (
        <div>
            <button onClick = {onClick}>
                <img src = {image} alt="" />
                {text}</button>
        </div>
    );
}

export default Button
