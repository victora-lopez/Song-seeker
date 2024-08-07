import React from 'react';
import './Header.css';
import Login from './Login';

function Header(){
    return(
    <div className='header'>
      <div className='header-left'>
        <h2 className='title'>Song Seeker</h2>
      </div>
      <nav className='center'>
        <ul>
          <li><a href='#'>link</a></li>
          <li><a href='#'>link</a></li>
          <li><a href='#'>link</a></li>
        </ul>
      </nav>
      <div className='header-right'>
        <Login/>
      </div>
    </div>
    );
}
export default Header;