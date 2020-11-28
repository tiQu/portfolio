import React from 'react';
import './Home.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero/Hero';
import Bullet from './Bullet/Bullet';
import FadeInSection from '../global/FadeInSection/FadeInSection';

class Home extends React.Component{
    render(){
        return (
            <section className="Home">
                <div className="col-home col-home-1">
                    <Bullet id="b1" text="React" description="dev"/>
                    <Bullet id="b2" text="Angular" />
                    <Bullet id="b3" text=".NET" />
                </div>
                <div className="Home-logo">
                    <ParallaxProvider>
                        <Hero />
                    </ParallaxProvider>
                </div>
                <div className="col-home col-home-2">
                    <Bullet id="b4" text="data analysis" />
                    <Bullet id="b5" text="R" />
                    <Bullet id="b6" text="market research" />
                </div>
            </section>
        );
    }
  }

export default Home;