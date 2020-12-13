import React from 'react';
import './Home.scss';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero/Hero';
import BulletSide from './BulletSide/BulletSide';
import BulletCentre from './BulletCentre/BulletCentre';
// import FadeInSection from '../global/FadeInSection/FadeInSection';
import { BulletItems } from './BulletItems.js'

class Home extends React.Component{
    render(){
        return (
            <section className="Home">
                <div className="col-home-1">
                    <div className="bullets-left">
                        {BulletItems.slice(0,3).map((item) => {
                                return (
                                    <BulletSide scrollToSection={item.bulletId} txt={item.bulletTitle} offset={item.bulletOffset} />
                                )
                            })}
                        {/* <BulletSide idx="b1" scrollToSection="b1Target" txt="React" /> */}
                    </div>
                </div>
                <div className="col-home-2 Home-logo">
                    <ParallaxProvider>
                        <Hero />
                    </ParallaxProvider>
                    <div className="Home-bottom">
                        {BulletItems.map((item) => {
                            return (
                                <BulletCentre bulletClasses={item.bulletClasses} bulletId={item.bulletId} bulletTitle={item.bulletTitle} bulletDescription={item.bulletDescription} />
                            )
                        })}
                        {/* <SectionSeparator /> */}
                        {/* <Element className="Home-bottom-section Home-bottom-section2" id="b6Target">Something about market research</Element> */}
                    </div>
                </div>
                <div className="col-home-3">
                    <div className="bullets-right">
                        {BulletItems.slice(3,6).map((item) => {
                                return (
                                    <BulletSide scrollToSection={item.bulletId} txt={item.bulletTitle} offset={item.bulletOffset} />
                                )
                            })}
                    </div>
                </div>
            </section>
        );
    }
  }

export default Home;