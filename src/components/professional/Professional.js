import React from 'react';
import Card from './card/Card';
import './Professional.scss';
import { CardItems } from './CardItems.js'

class Professional extends React.Component{
    render(){
        return (
            <section className="professional">
                <Card cardCharacter={CardItems[0].cardCharacter}
                      cardHeader={CardItems[0].cardHeader}
                      cardSummary={CardItems[0].cardSummary}
                      cardList={CardItems[0].cardList}
                />
                <Card cardCharacter={CardItems[1].cardCharacter}
                      cardHeader={CardItems[1].cardHeader}
                      cardSummary={CardItems[1].cardSummary}
                      cardList={CardItems[1].cardList}
                />
            </section>
        );
    }
  }

export default Professional;