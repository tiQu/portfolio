import React from 'react';
import './Bullet.scss';

class Bullet extends React.Component{
    render(){
        return (
            <div className="bullet">
                <div className="bullet-text">{this.props.text}</div>
                <div id={this.props.id}>{this.props.description}</div>
            </div>
        );
    }
  }

export default Bullet;