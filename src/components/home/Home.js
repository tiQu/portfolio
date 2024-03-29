import React from 'react';
import './Home.scss';
import Hero from './Hero/Hero';
import Tagline from './Tagline/Tagline';
import Projects from './Projects/Projects';
// import FadeInSection from '../global/FadeInSection/FadeInSection';
import HomeDivider from './HomeDivider/HomeDivider';
import svgConsolePlus from './HomeDivider/svgConsolePlus';
import svgStack from './HomeDivider/svgStack';
import svgGrowthChart from './HomeDivider/svgGrowthChart';
import svgGear from './HomeDivider/svgGear';

export default function Home() {
    return (
        <section className="Home">
            <div className="col-home-2 Home-logo">
                <div className="Home-top">
                    <Hero />
                    <Tagline />
                </div>
                <HomeDivider Graphic={svgGrowthChart} dividerText="Value, delivered" />
                <ul className="home-value">
                    <li>&gt; Automated essential workflows within market research technology company, cutting programming time by half</li>
                    <li>&gt; In-company hackathon winner for biggest business impact</li>
                    <li>&gt; Shipped more than 200 projects as data analyst</li>
                    <li>&gt; Mentored and trained team members on tools and best practices in data analysis and software development</li>
                </ul>
                <HomeDivider Graphic={svgStack} dividerText="Tech I use regularly" />
                <div className="home-tech">React, SQL, R, AWS, Node.JS, Ruby on Rails, MongoDB, .NET APIs, Linux (distro hopping!), good ol' VBA</div>
                <HomeDivider Graphic={svgGear} dividerText="Also tinkering with" />
                <div className="home-tech">Lisp, Doom Emacs, Nix, Haskell</div>
                <HomeDivider Graphic={svgConsolePlus} dividerText="Public portfolio" />
                <Projects />
            </div>
        </section>
    );
}
