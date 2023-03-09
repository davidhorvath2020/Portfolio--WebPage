import React from "react";
import '../App.css';

const Home = () => {
    return (
        <div className="Home--MainContainer">
            <div className="Home--Greetings">
                <h3 className="FirstLine GreetingsElement">My name is </h3>
                <h1 className="GreetingsElement">David Horvath</h1>
                <h2 className="GreetingsElement">Welcome on my portfolio website!</h2>
                <h5 className="GreetingsElement Spoiler">Spoiler alert:</h5>
                <h4 className="GreetingsElement">I'm not an average developer...</h4>
                <div className="GreetingsIntroduction">
                    I started to develop in high school, but I went to university to study agricultural engineering.
                    I started programming again at the end of university as a hobby developer.
                    And now here I am... (--LINK---)
                </div>
            </div>
            <div className="Image--Container">
                It's me
                <img className="Home--Image"
                    src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" />
            </div>
        </div>
    )
}

export default Home;