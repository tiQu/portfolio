import React from 'react';
import './BulletSide.scss';
import { Link } from "react-scroll";

class BulletSide extends React.Component{
    render(){
        return (
            <Link activeClass="active" 
            spy={true}
            smooth={true}
            offset={parseInt(this.props.offset)}
            duration={500}
            to={this.props.scrollToSection}>
                <div className="bullet-text">{this.props.txt}</div>
            </Link>
        );
    }
  }

export default BulletSide;