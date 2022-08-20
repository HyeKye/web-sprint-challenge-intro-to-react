import React from "react";
import styles from "styled-components";

const CharInfoStyles = styles.div`
div{
    width: 20%
    font-weight: bold;
    font-size: 1rem;
    background-color: rgb(255, 255, 255, 0.8);
}
`;

function CharacterInfo(props) {
    const { starWarsData } = props;

    return (
        <CharInfoStyles>
            <div>
                <p>Gender: {starWarsData.gender} || Height: {starWarsData.height} || Mass: {starWarsData.mass} || DoB: {starWarsData.birth_year} || Eye Color: {starWarsData.eye_color} || Hair Color: {starWarsData.hair_color} || Skin Color: {starWarsData.skin_color}
                </p>
            </div>
        </CharInfoStyles>
    );
}

export default CharacterInfo;