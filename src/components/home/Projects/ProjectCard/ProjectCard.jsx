import './ProjectCard.scss';

export default function ProjectCard({asset, title, summary, stack, deployed, url}) {
    return(
        <div className="project-wrap">
            <div className="project-details">
                <div className="project-title">
                    {title}
                </div>
                <div>
                    {summary}
                </div>
                <div>
                    Stack / tech: {stack}
                </div>
                <a href={url} target="_blank" rel="noreferrer">
                    {deployed}
                </a>
            </div>
            <img src={asset} />
        </div>
    );
}