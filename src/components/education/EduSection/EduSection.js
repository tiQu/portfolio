import React from 'react';
import './EduSection.scss';
import AnimateText from '../../global/AnimateText/AnimateText';

class EduSection extends React.Component{
    render(){
        return (
            <div className="eduSection">
                <div className="eduSection-header">
                    {this.props.eduHeader}
                </div>
                <div className="eduSection-institution">
                    {this.props.eduInstitution}
                </div>
                <div className="eduSection-timespan">
                    {this.props.eduTimespan}
                </div>
                <div className="eduSection-summary">
                    {this.props.eduSummary}
                </div>
            </div>
        );
    }
  }

export default EduSection;