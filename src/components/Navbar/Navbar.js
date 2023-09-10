import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {


    return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link className='link' to='/agents/Duelist' >Duelists</Link>

                </li>
                <li>
                    <Link className='link' to='/agents/Initiator'>Initiators</Link>
                </li>
                <li>
                    <Link className='link' to='/agents/Controller'>Controllers</Link>
                </li>
                <li>
                    <Link className='link' to='/agents/Sentinel'>Sentinels</Link>
                </li>
            </ul>
            <Link className='btn' to='/newagent' >Add New Agent</Link>
        </div>
    )
}

export default Navbar