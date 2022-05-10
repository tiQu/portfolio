import React from 'react';
import './ProjectCard.scss';

export default function ProjectCard({asset, title, summary, stack, deployed, url}) {
    return(
        <div className="project-wrap">
            <div>
                <div className="projectTitle">
                    {title}
                </div>
                <div>
                    {summary}
                </div>
                <div>
                    Stack: {stack}
                </div>
                <a href={url} target="_blank" rel="noreferrer">
                    {deployed}
                </a>
            </div>
            <img src={asset} />
        </div>
    );
}