import React from 'react';
import './Card.scss';

class Card extends React.Component{
    render(){
        return (
            <div className="professional-card">
                <div className="professional-toplogo"></div>
                <div className="professional-header">Web Programmer</div>
                <div className="professional-summary">Summary about me as a web programmer</div>
                <div className="professional-list">Summary about me as a web programmer</div>
            </div>
        );
    }
  }

export default Card;