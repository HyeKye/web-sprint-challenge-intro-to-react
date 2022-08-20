import React from "react";
import styles from "styled-components";

const CharInfoStyles = styles.div`
div{
    border:5px dashed #a9def9;
    width: 10%
}
color: black;
`;

function CharacterInfo(props) {
    const { starWarsData } = props;

    return (
        <CharInfoStyles>
            <div>
                <p>Gender: {starWarsData.gender}</p>
                <p>Height: {starWarsData.height}</p>
                <p>Mass: {starWarsData.mass}</p>
                <p>DoB: {starWarsData.birth_year}</p>
                <p>Eye Color: {starWarsData.eye_color}</p>
                <p>Hair Color: {starWarsData.hair_color}</p>
                <p>Skin Color: {starWarsData.skin_color}</p>
            </div>
        </CharInfoStyles>
    );
}

export default CharacterInfo;