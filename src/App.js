// src/App.js

import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ccc;
`;

const App = () => {
  return (
    <AppContainer>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <MainContent />
      </div>
    </AppContainer>
  );
};

export default App;
