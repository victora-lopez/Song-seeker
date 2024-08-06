import React from 'react';
import './Header.css';

function Header(){
    return(
      <div className='header'>
        <ul>
            <li className='logo'>imagine logo here<img src='' alt=''></img></li>
            <li className='title'>SongSeeker</li>
            <li className='loginButton'><button>Login</button></li>
        </ul>
      </div>
    );
}
export default Header;