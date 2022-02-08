import axios, { AxiosRequestConfig } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { readConfigApiKey } from '../../helpers/configHelper';
import {  Pokemon } from '../models/pokemon';

export const getPokemon = createAsyncThunk('ShakespeareanPokemon/Pokemon', async (name?: string) => {
    const endpoint = readConfigApiKey('PokemonEndpoint');
    const response = await axios.get(endpoint+name);
    return (response.data) as Pokemon;
})

