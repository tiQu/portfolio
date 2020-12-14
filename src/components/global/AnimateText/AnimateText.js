class AnimateText extends Component {
    render(){
      return(
        <span className="animateThis" aria-label={this.props.content}>
            {this.props.copy.split("").map(function(c, ix){
              let styles = {"animation-delay": (0.55 + ix / 10) + "s"}
              return <span
                aria-hidden="true"
                key={ix}
                style={styles}>
                {c}
              </span>;
            })}
          </span>
      );
    }
  }

export default AnimateText;