import React from 'react';
import { selfs } from '../data';
import "../Resume.docx";

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
                <br/>
                I like to build amazing apps.
                </h1>
                <p>
                    My experience is in full stack object oriented programming.
                    Recently I have received my web development certification through Openclassrooms. An online program based 
                    in Paris, France. Through them I have learned multiple laguages and have built many projects.
                    Including designing databases in MySQL. Let me put my skills to work for you.  
                </p>
            </div>
                <div className="links">
                <a href="https://www.linkedin.com/in/colt-hafer-b4829487" className="linkedIn_link">
                    Linked In
                </a>
                </div>
            </div>
        </section>
    );
}