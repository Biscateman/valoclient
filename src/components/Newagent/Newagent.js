import React, { useState } from 'react'
import './Newagent.css'

const Newagent = () => {

    const [name, setName] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [role, setRole] = useState('')
    const [country, setCountry] = useState('')

    const options = ['Duelist', 'Initiator', 'Controller', 'Sentinel']

    const handleChange = (e) => {
        setRole(e.target.value)
    }

    const handleSubmit = (e) => {
        const url = 'http://localhost:8080/newagent';

        e.preventDefault()

        console.log(name, imgUrl, role, country)

        const postData = {
            name: name,
            imgUrl: imgUrl,
            role: role,
            country: country
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Done'); // Response data from the server
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className='newagent'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <label htmlFor='name'>Name:</label>
                    <input name='name' id='name' onChange={(e) => setName(e.target.value)} required={true} value={name} ></input>
                </div>
                <div className='row'>
                    <label htmlFor='imgUrl' >ImageUrl:</label>
                    <input name='imgUrl' id='imgUrl' onChange={(e) => setImgUrl(e.target.value)} required={true} value={imgUrl} ></input>
                </div>
                <div className='row'>
                    <label htmlFor='role' >Role:</label>
                    <select name='role' id='role' value={role} onChange={handleChange} required={true} >
                        <option>Select</option>
                        {options.map((value) => (
                            <option value={value} key={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='row'>
                    <label htmlFor='country'>Country:</label>
                    <input name='country' onChange={(e) => setCountry(e.target.value)} id='country' value={country} required={true} ></input>
                </div>
                <button className='btn' type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Newagent