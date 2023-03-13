import React from "react";
import '../App.css';
import { Link } from "react-router-dom";


const Home = (props) => {
    return (
        <div className="Home">
            <div className={`Home--Container ${props.DarkMode && 'Home--Container--Dark'}`}>
                <section className="Home--Section">
                    <div className="Home--Greetings">
                        <h3 className="FirstLine GreetingsElement">My name is </h3>
                        <h1 className="GreetingsElement">David Horvath</h1>
                        <h2 className="GreetingsElement">Welcome on my portfolio website!</h2>
                        <h5 className="GreetingsElement Spoiler">Spoiler alert:</h5>
                        <h4 className="GreetingsElement">I'm not an average developer...</h4>
                        <div className="GreetingsIntroduction">
                            I started to develop in high school, but I went to university to study agricultural engineering.
                            I started programming again at the end of university as a hobby developer.
                            And now here I am...
                            <Link to='/About'><span className="Home--LinkToAbout">Mutasd hol tartok </span></Link>
                        </div>
                    </div>
                    <div className="Image--Container">
                        <img className="Home--Image"
                            src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" />
                    </div>
                </section>
                <div className="GetInTouch">
                    <h2>
                        Get In Touch
                    </h2>
                    <div>
                        Here gonna be the icons and the links
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;