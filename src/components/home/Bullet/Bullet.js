import React from 'react';
import './Bullet.scss';
import { Link } from "react-scroll";

class Bullet extends React.Component{
    render(){
        return (
            <Link activeClass="active" 
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to={this.props.scrollToSection}>
                <div className="bullet-text">{this.props.txt}</div>
                <div id={this.props.idx} className="bullet-description">{this.props.description}</div>
            </Link>
        );
    }
  }

export default Bullet;