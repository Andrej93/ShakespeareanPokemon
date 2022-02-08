import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPokemon } from '../asyncActions/pokemonAsyncActions';
import { Pokemon } from '../models/pokemon';


interface ConfigState {
    searchPokemon: boolean,
    searchFinished: boolean,
    pokemon?: Pokemon,
    errorMessage: any
};
  
const initialState: ConfigState = {
    searchPokemon: false,
    searchFinished: false,
    pokemon: undefined,

    errorMessage: {}
};


export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setErrorMessage: (state, action: any) => {
            state.errorMessage = action.payload;
        },
        
    },
    extraReducers: builder => {
        builder.addCase(getPokemon.pending, (state, action) => {
            state.searchPokemon = true;
            state.errorMessage = undefined;
            state.searchFinished = false;
            state.pokemon = undefined;
        })
        builder.addCase(getPokemon.fulfilled, (state, action) => {
            state.searchPokemon = false;
            state.errorMessage = undefined;
            state.searchFinished = true;
            state.pokemon = action.payload;
        })
        builder.addCase(getPokemon.rejected, (state, action) => {
            state.searchPokemon = false;
            state.errorMessage = action.error.message;
            state.searchFinished = false;
        })
    }
});


export const setErrorMessage = configSlice.actions.setErrorMessage;


export default configSlice.reducer;
