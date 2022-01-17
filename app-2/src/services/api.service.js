import axios from 'axios';

export const getPokemons = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
}

export const getPokemon = (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}