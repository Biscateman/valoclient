import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.imgUrl} alt={props.name} ></img>
            <h3>Name: {props.name}</h3>
        </div>
    )
}

export default Card