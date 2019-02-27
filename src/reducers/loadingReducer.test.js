import { loadingReducer } from './loadingReducer';
import * as actions from '../actions';

describe('loadingReducer', () => {
    it('should return the initial state', () => {
        const expected = true
        const result = loadingReducer(undefined, {})
        expect(result).toEqual(expected)
    });

    it('should return the bool if the type is IS_LOADING', () => {
        const initialState = true
        const mockBool = false
        const result = loadingReducer(initialState, actions.isLoading(mockBool))
        expect(result).toEqual(mockBool)
    });
});