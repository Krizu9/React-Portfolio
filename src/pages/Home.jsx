import React, { useEffect } from 'react';
import '../styles/home.css';
import meImage from '../assets/me.png';
import Typed from 'typed.js';


const Home = () => {
    useEffect(() => {
        const options = {
            strings: [
                "I am a web developer...",
                "I am a backend developer...",
                "I am a fullstack developer...",
                "I might be your next employee..."
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            startDelay: 500,
            loop: true,
        };

        const typed = new Typed(".typing-text", options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="home">
            <div className="banner">
                <div className="text-content">
                    <h1>Welcome to my Portfolio</h1>
                    <p>
                        My name is Kristian and <span className="typing-text"></span>
                    </p>
                </div>
                <div className="image">
                    <img className="bannerimage" src={meImage} alt="Me" />
                </div>
            </div>
        </div>
    );
};

export default Home;
