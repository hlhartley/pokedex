import { errorReducer } from './errorReducer';
import * as actions from '../actions';

describe('errorReducer', () => {
    it('should return the initial state', () => {
        const expected = ''
        const result = errorReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return the message if the type is SET_ERROR', () => {
        const initialState = ''
        const mockMessage = 'Error'
        const result = errorReducer(initialState, actions.setError(mockMessage))
        expect(result).toEqual(mockMessage)
    });
});