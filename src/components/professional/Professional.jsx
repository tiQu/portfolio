import Card from './card/Card.jsx';
import { CardItems } from './CardItems.jsx'

import './Professional.scss';

export default function Professional() {
    const cards = [];
    for (let i = 0; i < CardItems.length; i++) {
        cards.push(
            <Card staticChar={CardItems[i].cardStaticChar}
                    animateChar={CardItems[i].cardAnimateChar}
                    addCharClass={CardItems[i].cardAddCharClass}
                    cardHeader={CardItems[i].cardHeader}
                    cardSummary={CardItems[i].cardSummary}
                    cardList={CardItems[i].cardList}
            />
        )
    }
    return (
        <section className="professional">
            {cards}
        </section>
    );
}
