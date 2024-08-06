import React from 'react';
import './Header.css';

function Header(){
    return(
      <div className='header'>
        <ul>
            <li className='logo'><img src='' alt='Spotify Icon'></img></li>
            <li className='title'>SongSeeker</li>
            <li className='loginButton'><button>Login</button></li>
        </ul>
      </div>
    );
}
export default Header;