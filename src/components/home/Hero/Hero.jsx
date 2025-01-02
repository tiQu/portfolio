import { Parallax } from 'react-scroll-parallax';

import './Hero.scss';

// const ParallaxSection = () => (
//     <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        
//     </Parallax>
// );
export default function Hero() {
    return (
        <Parallax className="custom-class" speed={10} tagOuter="figure">
            <div class="rellax hexagon hexagon1">
                <div class="hexagon-in1">
                    <div class="hexagon-in2">
                    </div>
                </div>
            </div>
        </Parallax>
    );
}
