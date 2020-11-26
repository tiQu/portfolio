import React from 'react';
import './Main.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from '../../home/Hero/Hero'

class Main extends React.Component{
    render(){
        return (
            <main>
                <ParallaxProvider>
                    <Hero />
                </ParallaxProvider>
            </main>
        );
    }
  }

export default Main;