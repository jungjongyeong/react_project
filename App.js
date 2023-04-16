import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Rout from "./components/Rout";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Section/Footer";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
        <Rout />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.main`
  position: relative;
  overflow-x: hidden;
  display: block;
  top: 40px;
`;
