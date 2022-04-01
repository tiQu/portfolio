import React from 'react';
import './Hero.scss';
import { Parallax } from 'react-scroll-parallax';

// const ParallaxSection = () => (
//     <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        
//     </Parallax>
// );
export default function Hero() {
    return (
        <Parallax className="custom-class" y={[0, -100]} x={[0, 0]} tagOuter="figure">
            <div class="rellax hexagon hexagon1">
                <div class="hexagon-in1">
                    <div class="hexagon-in2">
                        </div>
                        </div>
                        </div>
        </Parallax>
    );
}