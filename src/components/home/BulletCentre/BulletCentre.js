import React from 'react';
import './BulletCentre.scss';
import { Element } from "react-scroll";
import SectionSeparator from '../SectionSeparator/SectionSeparator';

class BulletCentre extends React.Component{
    render(){
        return (
            <div className={"bulletCentre-wrap " + this.props.bulletClasses}>
                <Element className='Home-bottom-section' id={this.props.bulletId}>{this.props.description}</Element>
                <SectionSeparator />
            </div>
        );
    }
  }

export default BulletCentre;