import axios from "axios"
import { CharacterModel } from "../models";

const getCharacters = () => {
    return axios.get('https://rickandmortyapi.com/api/character');
} 

const getCharacter = (id: string): Promise<CharacterModel[]> => {
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`);
}

export { getCharacters, getCharacter };