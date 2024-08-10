import React from "react";
import "./Content.css"
import Login from "./Login";

function Content(props) {
    return(
        <div className="content">
            
            <div className="content-left">
                <h1>Will probably put an image here</h1>
            </div>
            <div className="content-right">
                <h2>Your Song,<br></br> Our Recommendations</h2> 
                <div>
                    <p className="description">
                        Welcome to Song Seeker, your music discovery companion. Start finding new music
                        by simply entering a song you love and letting us do the rest. Using Spotify's
                        API we deliver the best song recommendations based on your chosen track or your
                        music history. Dive into a world of melodies tailored just for you!
                    </p>
                    <Login value="Get Started" token={props.token} setToken={props.setToken}/>
                </div>
            </div>
        </div>
    )
}

export default Content