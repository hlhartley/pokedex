import { pokemonReducer } from './pokemonReducer';
import * as actions from '../actions';

describe('pokemonReducer', () => {
    it('should return the initial state', () => {
        const expected = []
        const result = pokemonReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return the array of pokemon if the type is GET_POKEMON', () => {
        const initialState = []
        const mockPokemon = [
            { 
                id: "1",
                name: "normal"
            },
            { 
                id: "2",
                name: "fighting"
            }
        ]
        const result = pokemonReducer(initialState, actions.getPokemon(mockPokemon))
        expect(result).toEqual(mockPokemon)
    });
});