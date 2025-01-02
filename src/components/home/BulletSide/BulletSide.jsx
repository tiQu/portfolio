import { Link } from "react-scroll";

import './BulletSide.scss';

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
