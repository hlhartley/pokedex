import * as actions from '../actions'

describe('actions', () => {
    it('should have a type of IS_LOADING', () => {
        const bool = true
        const expectedAction = {
            type: 'IS_LOADING',
            bool: true
        }

    const result = actions.isLoading(bool)
    expect(result).toEqual(expectedAction)
    });

    it('should have a type of SET_ERROR', () => {
        const message = 'There is an error'
        const expectedAction = {
            type: 'SET_ERROR',
            message: 'There is an error'
        }

    const result = actions.setError(message)
    expect(result).toEqual(expectedAction)
    });

    it('should have a type of GET_POKEMON', () => {
        const pokemon = [
            { 
                id: "1",
                name: "normal"
            },
            { 
                id: "2",
                name: "fighting"
            }
        ]
        
        const expectedAction = {
            type: 'GET_POKEMON',
            pokemon: [
                { 
                    id: "1",
                    name: "normal"
                },
                { 
                    id: "2",
                    name: "fighting"
                }
            ]
        }

    const result = actions.getPokemon(pokemon)
    expect(result).toEqual(expectedAction)
    });
})