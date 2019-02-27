import React, { Component } from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import { connect } from 'react-redux';

class CardContainer extends Component {
    render() {
        console.log(this.props.pokemon)
        return (
            this.props.pokemon.map((pokemon) => {
                return <Card pokemon={pokemon}/>
            })
        );
    }
}

const mapStateToProps = (state) => ({
    pokemon: state.pokemon
});

export default connect(mapStateToProps)(CardContainer);