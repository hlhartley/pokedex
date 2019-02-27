import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import { fetchPokemon } from '../../thunks/fetchPokemon';
import { connect } from 'react-redux'

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount = () => {
    const url = 'http://localhost:3001/types'
    fetchPokemon(url)
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <CardContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  pokemon: state.pokemon
});

const mapDispatchToProps = (dispatch) => ({
  fetchPokemon: (url) => dispatch(fetchPokemon(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
