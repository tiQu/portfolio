import react from "react";
import './HomeDivider.scss'

export default function HomeDivider({Graphic, dividerText}) {
    return (
        <div className="home-title">
            <div className="home-graphic">
                <Graphic />
            </div>
            <div>
                {dividerText}
            </div>
        </div>
    );
}