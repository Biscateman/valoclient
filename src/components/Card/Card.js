import React from 'react'
import './Card.css'

const Card = (props) => {

    return (
        <div className='card'>
            <img src={props.img} alt={props.name} ></img>   
            <h3>Name: {props.name}</h3>
            <h3>Role: {props.role}</h3>
            <h3>Country: {props.country}</h3>
        </div>
    )
}

export default Card