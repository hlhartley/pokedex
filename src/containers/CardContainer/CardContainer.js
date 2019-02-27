import React, { Component } from 'react';
import './CardContainer.css';
import Card from '../Card/Card'


class CardContainer extends Component {

    render() {
        return (
            <div className='CardContainer'>
                CardContainer
                <Card />
            </div>
        );
    }
}


export default CardContainer;