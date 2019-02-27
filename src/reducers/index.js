import { combineReducers } from 'redux'
import { loadingReducer } from './loadingReducer'
import { errorReducer } from './errorReducer'
import { pokemonReducer } from './pokemonReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    error: errorReducer,
    pokemon: pokemonReducer,
})

export default rootReducer;