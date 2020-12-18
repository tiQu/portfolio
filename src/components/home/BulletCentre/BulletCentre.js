import React from 'react';
import './BulletCentre.scss';
import { Element } from "react-scroll";
import SectionSeparator from '../SectionSeparator/SectionSeparator';

class BulletCentre extends React.Component{
    render(){
        return (
            <div className={"bulletCentre-wrap " + this.props.bulletClasses}>
                <div className="bulletCentre-top">
                    <div className="bulletCentre-el1">
                        {this.props.bulletTitle}
                    </div>
                    <div className="bulletCentre-el2">
                        <Element className='Home-bottom-section' id={this.props.bulletId}>{this.props.bulletDescription}.</Element>
                    </div>
                </div>
                <div className="bulletCentre-bottom">
                    <SectionSeparator />
                </div>
            </div>
        );
    }
  }

export default BulletCentre;