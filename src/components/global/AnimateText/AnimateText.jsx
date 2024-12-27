import React from 'react';
import './AnimateText.scss';

class AnimateText extends React.Component {
    render(){
      return(
        <span className="animateThis" aria-label={this.props.content} role="p">
            {this.props.content.split("").map(function(c, ix){
            //   let style = {"animation-delay": (0.5 + ix / 10) + "s"}
              return <span
                aria-hidden="true"
                key={ix}
                // style={style}>
                >
                {c}
              </span>;
            })}
          </span>
      );
    }
  }

export default AnimateText;