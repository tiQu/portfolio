import React from 'react';
import Card from './card/Card.jsx';
import './Professional.scss';
import { CardItems } from './CardItems.jsx'

export default function Professional() {
    return (
        <section className="professional">
            <Card staticChar={CardItems[0].cardStaticChar}
                    animateChar={CardItems[0].cardAnimateChar}
                    addCharClass="hop"
                    cardHeader={CardItems[0].cardHeader}
                    cardSummary={CardItems[0].cardSummary}
                    cardList={CardItems[0].cardList}
            />
            <Card staticChar={CardItems[1].cardStaticChar}
                    animateChar={CardItems[1].cardAnimateChar}
                    addCharClass="blink"
                    cardHeader={CardItems[1].cardHeader}
                    cardSummary={CardItems[1].cardSummary}
                    cardList={CardItems[1].cardList}
            />
            <Card staticChar={CardItems[2].cardStaticChar}
                    animateChar={CardItems[2].cardAnimateChar}
                    addCharClass="spacing"
                    cardHeader={CardItems[2].cardHeader}
                    cardSummary={CardItems[2].cardSummary}
                    cardList={CardItems[2].cardList}
            />
        </section>
    );
}
