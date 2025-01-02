import './Card.scss';

export default function Card({staticChar, addCharClass, animateChar, cardHeader, cardSummary, cardList}) {
    return (
        <div className="professional-card">
            <div className="professional-card-top">
                <div className="professional-line professional-character">{staticChar}
                    <span className={addCharClass}>{animateChar}</span>
                </div>
                <div className="professional-line professional-header">{cardHeader}</div>
            </div>
            <div className="professional-line professional-summary">{cardSummary}</div>
            <div className="professional-line">{cardList.map((subitem, i) => {
                return(
                    <div className="professional-list">{subitem}</div>
                    )
            })}</div>
        </div>
    );
}
