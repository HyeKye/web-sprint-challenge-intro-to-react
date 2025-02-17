// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterInfo from "./CharacterInfo";

const CharacterStyle = styled.div`
div{
    display: flex;
    padding: 5px;
}

h2{
    background-color: rgb(255,255,255,0.8);
    display: flex;
    width: 10%
}
`;

function Character() {
    const [ starWarsData, setStarWarsData] = useState();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/`)
            .then((response) => {
                setStarWarsData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (!starWarsData) return <h1>Loading . . . </h1>;

    return (
        <div>
            {starWarsData.map((starWarsData) => {
                return (
                    <CharacterStyle>
                        <span>
                            <h2 class="swName">{starWarsData.name}</h2>
                            <CharacterInfo key={starWarsData.id} starWarsData={starWarsData} />
                        </span>
                    </CharacterStyle>
                );
            })}
        </div>
    );
}

export default Character;