import React from 'react';
import './Home.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero/Hero';
import BulletSide from './BulletSide/BulletSide';
import Tagline from './Tagline/Tagline';
import BulletCentre from './BulletCentre/BulletCentre';
// import FadeInSection from '../global/FadeInSection/FadeInSection';
import { BulletItems } from './BulletItems.js'

export default function Home() {
    return (
        <section className="Home">
            <div className="col-home-2 Home-logo">
              <ParallaxProvider>
                  <Hero />
              </ParallaxProvider>
              <Tagline />
            </div>
        </section>
    );
}
