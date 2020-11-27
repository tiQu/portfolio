import React from 'react';
import './Bullet.scss';
import { ParallaxProvider } from 'react-scroll-parallax';

class Main extends React.Component{
    render(){
        return (
            <div className="bullet">
                {this.props.text}
            </div>
        );
    }
  }

export default Main;