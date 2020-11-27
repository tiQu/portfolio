import React from 'react';
import './Home.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero/Hero';
import Bullet from './Bullet/Bullet';

class Home extends React.Component{
    render(){
        return (
            <section className="Home">
                <div className="col-home col-home-1">
                    <Bullet text="React" />
                    <Bullet text="Angular" />
                    <Bullet text=".NET" />
                </div>
                <div className="Home-logo">
                    <ParallaxProvider>
                        <Hero />
                    </ParallaxProvider>
                </div>
                <div className="col-home col-home-2">
                    <Bullet text="data analysis" />
                    <Bullet text="R" />
                    <Bullet text="market research" />
                </div>
            </section>
        );
    }
  }

export default Home;