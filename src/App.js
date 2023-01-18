import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import ContextAPI from "./ContextAPI/ContextAPI";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cliente from './Pages/Cliente';
import Financeiro from './Pages/Financeiro';


function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const data = searchParams.get("data");
  const dataConvert = encodeURIComponent(data);

  const [dados, setDados] = useState([]);

  const theme = createTheme({
    
    palette: {
      primary: {
        main: "#e8294c",
      },
      secondary: {
        main: "#ec543b",
      },
      info: {
        main: "#f3955a",
      },
      text: {
        primary: "#666",
      },
    },
  });

  useEffect(() => {
    axios
      .get("https://www.grupofortune.com.br/integracao/softwareexpress/atualizacao/portal/busca-dados.php?data=" + dataConvert )
      .then((res) => {
        console.log(res.data[0]);
        setDados(res.data[0]);
      });
  }, []);
  return (
    <ContextAPI.Provider value={{ dados, setDados }}>
      <ThemeProvider theme={theme}>       
          <NavBar />
          <Container fixed>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/financeiro" element={<Financeiro />} />            
          </Routes>
          </Container>       
      </ThemeProvider>
    </ContextAPI.Provider>
  );
}

export default App;
