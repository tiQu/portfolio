import React from 'react';
import './Hero.scss';
import { Parallax } from 'react-scroll-parallax';

const ParallaxSection = () => (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        
    </Parallax>
);

class Hero extends React.Component{
    render(){
        return (
            <Parallax className="custom-class" y={[-100, 50]} x={[100,-50]} tagOuter="figure">
                <div class="rellax hexagon hexagon1"><div class="hexagon-in1"><div class="hexagon-in2"></div></div></div>
            </Parallax>
        );
    }
  }

export default Hero;