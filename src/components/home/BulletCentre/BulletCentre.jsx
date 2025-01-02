import { Element } from "react-scroll";

import './BulletCentre.scss';

export default function BulletCentre({bulletTitle, bulletClasses, bulletId, bulletDescription}) {
    return (
        <div className={"bulletCentre-wrap " + bulletClasses}>
            <div className="bulletCentre-top">
                <div className="bulletCentre-el1">
                    {bulletTitle}
                </div>
                <div className="bulletCentre-el2">
                    <Element className='Home-bottom-section' id={bulletId}>{bulletDescription}.</Element>
                </div>
            </div>
        </div>
    );
}
