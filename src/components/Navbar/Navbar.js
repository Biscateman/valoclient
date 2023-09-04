import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {


    return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link className='link' to='/duelists' >Duelists</Link>

                </li>
                <li>
                    <Link className='link' to='/initiators'>Initiators</Link>
                </li>
                <li>
                    <Link className='link' to='/controllers'>Controllers</Link>
                </li>
                <li>
                    <Link className='link' to='/sentinels'>Sentinels</Link>
                </li>
            </ul>
            <Link className='btn' to='/newagent' >Add New Agent</Link>
        </div>
    )
}

export default Navbar