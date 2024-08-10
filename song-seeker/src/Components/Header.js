import React from 'react';
import './Header.css';
import Login from './Login';
import logo from './logo-icon.png';

function Header(){
    return(
    <div className='header'>
      <div className='header-left'>
        <h1 className='title'>Song Seeker</h1>
      </div>
      <nav className='center'>
        <ul>
          <li><a href='#'>link</a></li>
          <li><a href='#'>link</a></li>
          <li><a href='#'>link</a></li>
        </ul>
      </nav>
      <div className='header-right'>
        <Login value="Login to Spotify"/>
      </div>
    </div>
    );
}
export default Header;