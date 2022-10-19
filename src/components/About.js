import React from 'react';
import { selfs } from '../data';
import link from "../linkedin.png";

export default function About() {
    return(
        <section id='about'>
            <div className="container">
            <div className="picture">
                {selfs.map((self) => (
                <a 
                    href={self.title}
                    key={self.image}
                >
                    <img className="selfie"
                        alt="gallery"
                        src={self.image}
                    />
                </a>
                ))}
            </div>
            <div className="intro">
                <h1>
                Hi, I'm Colt.
                </h1>
                <br/>
                <p> 
                    I like to build amazing apps using object oriented programming. I recently received my web development
                    certification through OpenClassrooms, during which I built many porjects and became certified in many languages. 
                    Let me pu my skills to work for you. 
                </p>
            </div>
                <div className="links">
                <a href="https://www.linkedin.com/in/colt-hafer-b4829487" className="linkedIn_link">
                    <img src={link} alt="LinkedIn"/>
                </a>
                </div>
            </div>
        </section>
    );
}

