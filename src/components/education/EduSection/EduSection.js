import React from 'react';
import './EduSection.scss';
import AnimateText from '../../global/AnimateText/AnimateText';

class EduSection extends React.Component{
    render(){
        return (
            <div className="eduSection">
                <div className="eduSection-top">
                    <div className="eduSection-header">
                        <AnimateText content={this.props.eduHeader} />
                    </div>
                    <div className="eduSection-institution">
                        <AnimateText content={this.props.eduInstitution} />
                    </div>
                    <div className="eduSection-timespan">
                        <AnimateText content={this.props.eduTimespan} />
                    </div>
                </div>
                <div className="eduSection-summary">
                    <AnimateText content={this.props.eduSummary} />
                </div>
            </div>
        );
    }
  }

export default EduSection;