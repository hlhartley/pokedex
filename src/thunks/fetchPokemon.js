import { isLoading, setError, getPokemon } from '../actions'

export const fetchPokemon = (url) => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true))
            const response = await fetch(url)
            if(!response.ok) {
                throw Error(response.statusText)
            }
            dispatch(isLoading(false))
            const pokemon = await response.json()
            dispatch(getPokemon(pokemon))
        } catch (error) {
            dispatch(setError(error.message))
        }
    }
}