import React from 'react';
import './Projects.scss';
import { ProjectItems } from "./ProjectItems";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects() {
    return (
        <div className="projects-wrap">
            {ProjectItems.map((item) => {
                return (
                    <ProjectCard
                        asset = {item.projectAsset}
                        title = {item.projectTitle}
                        summary = {item.projectSummary}
                        stack = {item.projectStack}
                        deployed = {item.projectDeployed}
                        url = {item.projectUrl}
                    />
                )
            })}

        </div>
    );
}
