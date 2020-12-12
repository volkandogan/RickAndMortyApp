import React, { useState, useEffect, useContext } from 'react';
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
                //console.log(response)
                let newData = characters;
                let data = (response.data && response.data.results) || [];


                //setCharacters(...characters, response.data.results)
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
        console.log(characterId)
        axios.get(`${API}character/${characterId}`)
            .then((response) => {
                //console.log(response.data)
                setCharacterDetail(response.data)
            })
            .catch((error) => {
                console.log('error', error);
            });
    }
    const chooseCharachter = (id) => {
        setCharacterId(id)
    }

    const getEpisodeName = (episode) => {
        /* {
             characterDetail && characterDetail.episode.slice(-5).map(episode =>
                 <Text>{episode.replace('https://rickandmortyapi.com/api/episode/', "")}</Text>
             )
 
         }*/
        axios.get(`${API}episode/${episode}`)
            .then((response) => {
                //console.log(response.data)
                setCharacterDetail(response.data)
            })
            .catch((error) => {
                console.log('error', error);
            });
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