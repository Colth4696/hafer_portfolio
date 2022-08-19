import React from 'react';
import { skills } from '../data';

export default function Skills() {
    return(
        <section id='skills'>
            <div className="container_b">
            <div className="my_skills">
                <h1>
                Skills 
                </h1>
            </div>
                <div className="skills_list">
                {skills.map((skill) => (
                    <div className="skill_title">
                        <ul>
                            <li>
                            {skill.title}
                            </li>
                        </ul>
                    </div>
                    ))}
            </div>
            </div>
        </section>
    );
}