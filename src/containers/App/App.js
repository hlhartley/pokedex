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
    this.props.fetchPokemon(url)
  }

  render() {
    if (this.props.loading) {
      return (
        <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <p>POKeDEX is loading ...</p>
        <CardContainer />
      </div>
      )
    } else if (this.props.error) {
      return (
        <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <p>Error: {this.props.error}</p>
        <CardContainer />
      </div>
      )
    } else {
      return (
        <div className='App'>
          <h1 className='header'> POKéDEX </h1>
          <CardContainer />
        </div>
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPokemon: (url) => dispatch(fetchPokemon(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
