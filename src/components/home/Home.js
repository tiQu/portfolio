import React from 'react';
import './Home.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero/Hero';
import Bullet from './Bullet/Bullet';
import FadeInSection from '../global/FadeInSection/FadeInSection';
import SectionSeparator from './SectionSeparator/SectionSeparator';

class Home extends React.Component{
    render(){
        return (
            <section className="Home">
                <div className="col-home col-home-1">
                    <Bullet idx="b1" scrollToSection="b1Target" txt="React" />
                    <Bullet idx="b2" scrollToSection="b2Target" txt="Angular" />
                    <Bullet idx="b3" scrollToSection="b3Target" txt=".NET" />
                </div>
                <div className="Home-logo">
                    <ParallaxProvider>
                        <Hero />
                    </ParallaxProvider>
                    <div className="Home-bottom">
                        <div className="Home-bottom-section Home-bottom-section1" id="b1Target">Something about React</div>
                        {/* <SectionSeparator /> */}
                        <div className="Home-bottom-section Home-bottom-section1" id="b2Target">Something about Angular</div>
                        {/* <SectionSeparator /> */}
                        <div className="Home-bottom-section Home-bottom-section1" id="b3Target">Something about .NET</div>
                        {/* <SectionSeparator /> */}
                        <div className="Home-bottom-section Home-bottom-section2" id="b4Target">Something about data analysis</div>
                        {/* <SectionSeparator /> */}
                        <div className="Home-bottom-section Home-bottom-section2" id="b5Target">Something about R</div>
                        {/* <SectionSeparator /> */}
                        <div className="Home-bottom-section Home-bottom-section2" id="b6Target">Something about market research</div>
                    </div>
                </div>
                <div className="col-home col-home-2">
                    <Bullet idx="b4" scrollToSection="b4Target" txt="data analysis" />
                    <Bullet idx="b5" scrollToSection="b5Target" txt="R" />
                    <Bullet idx="b6" scrollToSection="b6Target" txt="market research" />
                </div>
            </section>
        );
    }
  }

export default Home;