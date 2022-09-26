import {Link} from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/songs'>songs</Link>
        </li>
        <li>
          <Link to='/playlists'>playlists</Link>
        </li>
        <li>
          <Link to='/contests'>contests</Link>
        </li>
        <li>
          <Link to='/players'>players</Link>
        </li>

      </ul>
    )
}

export default NavBar;