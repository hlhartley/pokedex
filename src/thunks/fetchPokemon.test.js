import { fetchPokemon } from '../thunks/fetchPokemon';
import { isLoading, setError, getPokemon } from '../actions'

describe('fetchStaff', () => {
    let mockUrl
    let mockDispatch

    beforeEach(() => {
        mockUrl = 'www.url.com'
        mockDispatch = jest.fn()
    })

    it('calls dispatch with the isLoading action', () => {
        const thunk = fetchPokemon(mockUrl) 
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
    })

    it('should dispatch setError with a message if the response is not ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: false,
            statusText: 'Something went wrong'
        }))
        
        const thunk = fetchPokemon(mockUrl) 
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(setError('Something went wrong'))
    })

    it('should dispatch isLoading(false) if the response is ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true
    }))
        
        const thunk = fetchPokemon(mockUrl)
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
    })
});