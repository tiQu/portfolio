import React from 'react';
import './BulletSide.scss';
import { Link } from "react-scroll";

export default function BulletSide({offset, scrollToSection, txt}) {
    return (
        <Link activeClass="active" 
        spy={true}
        smooth={true}
        offset={parseInt(offset)}
        duration={500}
        to={scrollToSection}>
            <div className="bullet-text">{txt}</div>
        </Link>
    );
}
