export const isLoading = (bool) => ({
    type: 'IS_LOADING',
    bool
})

export const setError = (message) => ({
    type: 'SET_ERROR',
    message
})

export const getPokemon = (pokemon) => ({
    type: 'GET_POKEMON',
    pokemon
})