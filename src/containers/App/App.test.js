import React from 'react';
import App, { mapStateToProps, mapDispatchToProps } from './App';
import { fetchPokemon } from '../../thunks/fetchPokemon';

jest.mock('../../thunks/fetchPokemon')

describe('App', () => {
    describe('mapStateToProps', () => {
        it('should return an object with loading and error', () => {
            const mockState = {
                pokemon: [
                    { 
                        id: "1",
                        name: "normal"
                    },
                    { 
                        id: "2",
                        name: "fighting"
                    }
                ],
                loading: false,
                error: '',
                moreStuff: []
            }

            const expected = {
                loading: false,
                error: ''
            }

        const mappedProps = mapStateToProps(mockState)
        expect(mappedProps).toEqual(expected)
        });
    });

    describe('mapDispatchToProps', () => {
        it('calls dispatch with an fetchPokemon action when fetchPokemon is called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = fetchPokemon()
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.fetchPokemon()
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    });
});
    
