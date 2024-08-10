// import logo from './logo.svg';
import './App.css';
import Header from "../Components/Header"
import Content from '../Components/Content';
import { useState } from 'react';

function App() {
  const [token,setToken] = useState("");
  return (
      <div>
        <Header token={token} setToken={setToken}/>
        <Content token={token} setToken={setToken}/>
      </div>
  );
}

export default App;
