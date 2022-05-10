import React from 'react';
import './Home.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero/Hero';
import Tagline from './Tagline/Tagline';
import Projects from './Projects/Projects';
// import FadeInSection from '../global/FadeInSection/FadeInSection';
import ProjectsDivider from './ProjectsDivider/ProjectsDivider';

export default function Home() {
    return (
        <section className="Home">
            <div className="col-home-2 Home-logo">
              <ParallaxProvider>
                  <Hero />
              </ParallaxProvider>
              <Tagline />
              <ProjectsDivider />
              <Projects />
            </div>
        </section>
    );
}
