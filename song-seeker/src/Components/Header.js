import React from 'react';
import './Header.css';

function Header(){
    return(
    <div className='header'>
      <div className='header-left'>
        <span className='title'>Song Seeker</span>
      </div>
      <nav className='center'>
        <ul>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </nav>
      <div className='header-right'>
        <button className='login'>Login</button>
      </div>
    </div>
    );
}
export default Header;