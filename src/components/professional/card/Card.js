import React from 'react';
import './Card.scss';

class Card extends React.Component{
    render(){
        return (
            <div className="professional-card">
                <div className="professional-line professional-character">{this.props.staticChar}
                    <span className={this.props.addCharClass}>{this.props.animateChar}</span>
                </div>
                <div className="professional-line professional-header">{this.props.cardHeader}</div>
                <div className="professional-line professional-summary">{this.props.cardSummary}</div>
                <div className="professional-line professional-list">{this.props.cardList}</div>
            </div>
        );
    }
  }

export default Card;