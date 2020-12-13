import React, { useState } from 'react';
import axios from 'axios';


const RootContext = React.createContext();


const API = 'https://rickandmortyapi.com/api/';


export const RootProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [characterId, setCharacterId] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [characterDetail, setCharacterDetail] = useState('');

    const getCharacters = (page) => {
        axios.get(`${API}character/?page=${page}`)
            .then((response) => {
                let newData = characters;
                let data = (response.data && response.data.results) || [];
                data.map((data) => {
                    newData.push(data);
                });
                setCharacters(newData);
            })
            .catch((error) => {
                console.log('error', error);
            });
    }
    const getCharacter = () => {
        axios.get(`${API}character/${characterId}`)
            .then((response) => {
                setCharacterDetail(response.data)
            })
            .catch((error) => {
                console.log('error', error);
            });
    }
    const chooseCharachter = (id) => {
        setCharacterId(id)
    }
    return (
        <RootContext.Provider
            value={{
                characters: characters,
                setCharacters: setCharacters,
                currentPage: currentPage,
                setCurrentPage: setCurrentPage,
                getCharacters: getCharacters,
                chooseCharachter: chooseCharachter,
                getCharacter: getCharacter,
                characterDetail: characterDetail,
            }}>
            {children}
        </RootContext.Provider>
    );
}

export default RootContext;