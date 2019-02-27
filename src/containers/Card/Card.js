import React, { Component } from 'react';
import './Card.css';


class Card extends Component {

    render() {
        return (
            <div className='Card'>
                {this.props.pokemon.name}
            </div>
        );
    }
}


export default Card;