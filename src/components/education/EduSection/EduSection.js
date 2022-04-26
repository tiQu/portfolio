import React from 'react';
import './EduSection.scss';
import AnimateText from '../../global/AnimateText/AnimateText';

export default function EduSection({eduHeader, eduInstitution, eduTimespan, eduSummary}) {
    return (
        <div className="eduSection">
            <div className="eduSection-top">
                <div className="eduSection-header">
                    <AnimateText content={eduHeader} />
                </div>
                <div className="eduSection-institution">
                    <AnimateText content={eduInstitution} />
                </div>
                <div className="eduSection-timespan">
                    <AnimateText content={eduTimespan} />
                </div>
            </div>
            <div className="eduSection-summary">
                <AnimateText content={eduSummary} />
            </div>
        </div>
    )
}
