import React from 'react';
import './Home.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero/Hero';
import Tagline from './Tagline/Tagline';
import Projects from './Projects/Projects';
// import FadeInSection from '../global/FadeInSection/FadeInSection';
import HomeDivider from './HomeDivider/HomeDivider';
import svgConsolePlus from './HomeDivider/svgConsolePlus';
import svgStack from './HomeDivider/svgStack';
import svgGrowthChart from './HomeDivider/svgGrowthChart';

export default function Home() {
    return (
        <section className="Home">
            <div className="col-home-2 Home-logo">
                <div className="Home-top">
                    <ParallaxProvider>
                        <Hero />
                    </ParallaxProvider>
                    <Tagline />
                </div>
                <HomeDivider Graphic={svgGrowthChart} dividerText="Value, delivered" />
                <ul className="home-value">
                    <li>&gt; Automated workflow within programming team, cutting delivery time by half</li>
                    <li>&gt; In-company hackathon winner for biggest business impact</li>
                    <li>&gt; Shipped more than 200 projects as data analyst</li>
                </ul>
                <HomeDivider Graphic={svgStack} dividerText="Technologies I like" />
                <div className="home-tech">React, SQL, R, AWS, Node.JS, Ruby on Rails, MongoDB, .NET APIs, Kotlin, Flutter, good ol' VBA</div>
                <HomeDivider Graphic={svgConsolePlus} dividerText="Apps I've worked on" />
                <Projects />
            </div>
        </section>
    );
}
