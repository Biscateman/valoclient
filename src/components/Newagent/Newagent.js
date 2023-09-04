import React from 'react'
import './Newagent.css'

const Newagent = () => {

    const handleSubmit = () => {
        const url = 'http://localhost:3000/newagent';

        const postData = {
            key1: 'value1',
            key2: 'value2'
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
                console.log(data); // Response data from the server
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
                    <input name='name' id='name' required={true}  ></input>
                </div>
                <div className='row'>
                    <label htmlFor='imgUrl' >ImageUrl:</label>
                    <input name='imgUrl' id='imgUrl' required={true} ></input>
                </div>
                <div className='row'>
                    <label htmlFor='role' >Role:</label>
                    <select name='role' id='role' required={true} >
                        <option>Select the role</option>
                        <option>Duelist</option>
                        <option>Initiator</option>
                        <option>Controller</option>
                        <option>Sentinel</option>
                    </select>
                </div>
                <div className='row'>
                    <label htmlFor='country'>Country:</label>
                    <input name='country' id='country' required={true} ></input>
                </div>
                <button className='btn' type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Newagent