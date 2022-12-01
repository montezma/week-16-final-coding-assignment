import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <h1>M0D-DESIGN</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/artpage'>Art</Link> </li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/ideas'>Ideas</Link></li>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
