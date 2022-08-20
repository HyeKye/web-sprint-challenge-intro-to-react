import React from 'react';
import styled from 'styled-components';
import Character from './components/Character';

const AppStyle = styled.div`
  text-align: left;
  padding-left: 20%;
  font-family: "Courier New", Courier, monospace;
  
  h1 {
    text-align: center;
    font-size: 4em;
    padding-right: 20%;
    font-family: "Courier New", Courier, monospace;
  }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppStyle>
      <h1 className="Header">REACT WARS</h1>
      <Character />
    </AppStyle>
  );
}

export default App;
