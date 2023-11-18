import './Home.css'
import platePic from './plate.png'
import {useState} from "react";
import {Link} from "react-router-dom";

const Home = () => {
    const [address, setAddress] = useState('');


    return (
        <>
            <div className="posh-home">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 726 1024" fill="none">
                    <path
                        d="M176.5 190.5C302.1 163.7 332.833 47.8333 331.5 -1.5H726V1023.5H85.5C60 998 7.39997 930 0.999974 862C-7.00003 777 164 761 205.5 678.5C247 596 236.5 488 120.5 430.5C4.49999 373 19.5 224 176.5 190.5Z"
                        fill="black" stroke="black"/>
                </svg>
                <img className="plate" src={platePic} alt="plate"/>

                <h1>YumCast</h1>
                <h4>Catchy tagline...</h4>

                <div className="location-input-container">
                    <input type="text" className="location-input" value={address}
                           onChange={(e) => setAddress(e.target.value)} placeholder="Type your address..."/>
                    <span className="location-icon">
                        <i className="fa-solid fa-location-crosshairs"></i>
                    </span>
                    <Link to="/dashboard"><button className="location-button">Search restaurants nearby</button></Link>
                </div>
            </div>

            <div className="home-blabla">
                <h3>Why YumCast?</h3>
                <div className="row mt-5">
                    <div className="col-lg">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </div>
                    <div className="col-lg">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </div>
                    <div className="col-lg">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;