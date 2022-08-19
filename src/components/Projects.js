import React from 'react';
import { projects } from '../data';

export default function Projects() {
    return(
        <section id="projects" className="recent_projects">
            <div className="container_a">
            <h1 className="the_goods">
                Apps I've Built
            </h1>
            <p className="summary">
                These are some samples of the projects I have completed.
            </p>
            </div>
            <div className="project_links">
                {projects.map((project) => (
                <a 
                    href={project.link}
                    key={project.image}
                >
                    <img className="photo"
                        alt="gallery"
                        src={project.image}
                    />
                    <div className="project_title">
                        <h1>
                            {project.title}
                        </h1>
                        <h2>
                            {project.subtitle}
                        </h2>
                    </div>
                </a>
            ))}
            </div>
        </section>
    )
}