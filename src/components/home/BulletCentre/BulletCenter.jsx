import { Element } from "react-scroll";

import './BulletCenter.scss';

export default function BulletCenter({bulletTitle, bulletClasses, bulletId, bulletDescription}) {
    return (
        <div className={"bulletCenter-wrap " + bulletClasses}>
            <div className="bulletCenter-top">
                <div className="bulletCenter-el1">
                    {bulletTitle}
                </div>
                <div className="bulletCenter-el2">
                    <Element className='Home-bottom-section' id={bulletId}>{bulletDescription}.</Element>
                </div>
            </div>
        </div>
    );
}
