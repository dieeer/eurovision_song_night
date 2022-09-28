import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-white'>
      <header>
        <div className='header-container'>
          <Link to='/' className='nav-link'>
            <span className='sr-only'>Eurovision Song night</span>
            <img
              className='logo'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alt=''
            />
          </Link>
          <nav>
            <ul className='main-nav'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/songs' className='nav-link'>
                  Songs
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/playlists' className='nav-link'>
                  Playlists
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/players' className='nav-link'>
                  Players
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contests' className='nav-link'>
                  Contests
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default NavBar
