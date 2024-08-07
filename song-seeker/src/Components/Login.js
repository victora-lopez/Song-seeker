import React from "react";
import { useEffect,useState } from "react";

const CLIENT_ID = "84c7b58f8b934bbe93f426d53fda17eb";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token"

function Login() {
    const [token,setToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash){
            token = hash.substring(1)
              .split("&")
              .find(elem => elem.startsWith("access_token"))
              .split("=")[1]
        }
    })

    return(
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            <button className="login">Login</button>
        </a>
    )
}

export default Login;
