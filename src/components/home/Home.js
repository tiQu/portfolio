import React from 'react';
import './Home.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero/Hero';
import BulletSide from './BulletSide/BulletSide';
import FadeInSection from '../global/FadeInSection/FadeInSection';
import SectionSeparator from './SectionSeparator/SectionSeparator';
import { Element } from 'react-scroll';

class Home extends React.Component{
    render(){
        return (
            <section className="Home">
                <div className="col-home-1">
                    <BulletSide idx="b1" scrollToSection="b1Target" txt="React" />
                    <BulletSide idx="b2" scrollToSection="b2Target" txt="Angular" />
                    <BulletSide idx="b3" scrollToSection="b3Target" txt=".NET" />
                </div>
                <div className="col-home-2 Home-logo">
                    <ParallaxProvider>
                        <Hero />
                    </ParallaxProvider>
                    <div className="Home-bottom">
                        <Element className="Home-bottom-section Home-bottom-section1" id="b1Target">Something about React</Element>
                        <SectionSeparator />
                        <Element className="Home-bottom-section Home-bottom-section1" id="b2Target">Something about Angular</Element>
                        <SectionSeparator />
                        <Element className="Home-bottom-section Home-bottom-section1" id="b3Target">Something about .NET</Element>
                        <SectionSeparator />
                        <Element className="Home-bottom-section Home-bottom-section2" id="b4Target">Something about data analysis</Element>
                        <SectionSeparator />
                        <Element className="Home-bottom-section Home-bottom-section2" id="b5Target">Something about R</Element>
                        <SectionSeparator />
                        <Element className="Home-bottom-section Home-bottom-section2" id="b6Target">Something about market research</Element>
                    </div>
                </div>
                <div className="col-home-3">
                    <BulletSide idx="b4" scrollToSection="b4Target" txt="data analysis" />
                    <BulletSide idx="b5" scrollToSection="b5Target" txt="R" />
                    <BulletSide idx="b6" scrollToSection="b6Target" txt="market research" />
                </div>
            </section>
        );
    }
  }

export default Home;