import React from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location =useLocation()
    let locationName=location.pathname.split('/')[1]

    return (
        <div className='sidebar'>
            <div className="sidebar__wrapper">
                <div className="auth__picture">
                    <img src='asset/images/user_picture.JPG' alt="" />
                </div>
                <div className="sidebar__menu">
                    <ul className='menu__list'>
                        <li className="menu__item" ><Link to="/" className='link' id='Home'>Home</Link></li>
                        <li className="menu__item"><Link to="/AboutMe" className={locationName ==='AboutMe'?'active':'link'}>AboutMe</Link></li>
                        <li className="menu__item"><Link to="/Portfolio" className={locationName === 'Portfolio' ?'active':'link'}>Portfolio</Link></li>
                        <li className="menu__item"><Link to="/Connect" className={locationName === 'Connect' ?'active':'link'} >Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
