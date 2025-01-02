import Hero from './Hero/Hero';
import Tagline from './Tagline/Tagline';
import Projects from './Projects/Projects';
import HomeDivider from './HomeDivider/HomeDivider';
import svgConsolePlus from './HomeDivider/svgConsolePlus';
import svgStack from './HomeDivider/svgStack';
import svgGrowthChart from './HomeDivider/svgGrowthChart';
import svgGear from './HomeDivider/svgGear';

import './Home.scss';

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
                    <li>&gt; In-company hackathon project winner for biggest business impact</li>
                    <li>&gt; Shipped more than 200 quick-turn projects as data analyst</li>
                    <li>&gt; Mentored and trained team members on tools and best practices in data analysis and software development</li>
                </ul>
                <HomeDivider Graphic={svgStack} dividerText="Tech I use regularly" />
                <div className="home-tech">
                    <ul>
                        <li>React</li>
                        <li>SQL</li>
                        <li>R</li>
                        <li>AWS</li>
                        <li>Node.JS</li>
                        <li>Ruby on Rails</li>
                        <li>MongoDB</li>
                        <li>Linux (EndeavourOS, Fedora, Debian)</li>
                        <li>Good ol' VBA</li>
                    </ul>
                </div>
                <HomeDivider Graphic={svgGear} dividerText="Also tinkering with" />
                <div className="home-tech">PiVPN, Volumio, LazyVim, Doom Emacs, Nix</div>
                <HomeDivider Graphic={svgConsolePlus} dividerText="Public portfolio" />
                <Projects />
            </div>
        </section>
    );
}
