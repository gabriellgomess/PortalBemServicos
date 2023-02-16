import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import ContextAPI from "./ContextAPI/ContextAPI";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cliente from "./Pages/Cliente/Cliente";
import Financeiro from "./Pages/Financeiro/Financeiro";
import Checkout from "./Pages/Checkout/Checkout";
import Cartao from "./Pages/Cartao/Cartao";
import NoPage from "./Components/NoPage/NoPage";
import Beneficios from "./Pages/Beneficios/Beneficios";
import Upgrade from "./Pages/Upgrade/Upgrade";
import FaleConosco from "./Pages/FaleConosco/FaleConosco";
import CheckupAnual from "./Pages/CheckUpAnual/CheckupAnual";
import collect from "collect.js";
import Lola from "./fonts/fs_lola.ttf";
import './App.css'

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const data = searchParams.get("data");
  const dataConvert = encodeURIComponent(data);

  const [dados, setDados] = useState([]);
  const [statusParcelas, setStatusParcelas] = useState(1);
  const [relatorio, setRelatorio] = useState([]);
  const [selecionadas, setSelecionadas] = useState([]);
  const [parcelaPaga, setParcelaPaga] = useState([]);
  const [parcelasNaoPagas, setParcelasNaoPagas] = useState([]);
  const [taxaBoleto, setTaxaBoleto] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);
 

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
    typography: {
      fontFamily: "Lola",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Lola';
            src: url(${Lola}) format('truetype');
          }
        `,
      },
    },
  });

  useEffect(() => {
    // verificar se tem dados no localstorage
    const dadosStorage = localStorage.getItem("dados");
    if (
      dadosStorage !== null &&
      dadosStorage !== "undefined" &&
      dadosStorage !== ""
    ) {
      setDados(JSON.parse(dadosStorage));
    } else {
      axios
        .get(
          "https://www.grupofortune.com.br/integracao/softwareexpress/atualizacao/portal/busca-dados.php?data=" +
            dataConvert
        )
        .then((res) => {
          setDados(res.data[0]);
          // salvar em localstorage
          localStorage.setItem("dados", JSON.stringify(res.data[0]));
        });
    }
    
  }, []);

  useEffect(() => {
    if (dados && dados.vendas_id) {
      const data = {
        vendas_id: dados.vendas_id,
      };
      axios
        .post(
          "https://www.grupofortune.com.br/integracao/softwareexpress/atualizacao/portal/handlePortal.php?param=1",
          data
        )
        .then((res) => {
          if (res.status === 200) {
            setRelatorio(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dados ? dados : []]);

  useEffect(() => {
    if (dados && dados.vendas_id) {
      const data = {
        vendas_id: dados.vendas_id,
      };
      axios
        .post(
          "https://www.grupofortune.com.br/integracao/softwareexpress/atualizacao/portal/handlePortal.php?param=1",
          data
        )
        .then((res) => {
          if (res.status === 200) {
            let result = res.data;
            setRelatorio(result);
            console.log(dados)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dados ? dados : []]);

  useEffect(() => {
    let parcelasNaoPagas = relatorio
      .filter((item) => item.transacao_recebido == 2)
      .map((row, index) => {
        return { ...row, id: index };
      });
    setParcelasNaoPagas(parcelasNaoPagas);

    let parcelas = collect(relatorio);
    let ultimaParcelaPaga = parcelas
      .where("transacao_recebido", "1")
      .sortBy(function (item) {
        return new Date(item.transacao_data);
      })
      .last();
    setParcelaPaga(ultimaParcelaPaga);

  }, [relatorio]);
  return (
    <div className="App">
    <ContextAPI.Provider
      value={{
        dados,
        setDados,
        statusParcelas,
        setStatusParcelas,
        relatorio,
        setRelatorio,
        selecionadas,
        setSelecionadas,
        parcelaPaga,
        setParcelaPaga,
        parcelasNaoPagas,
        setParcelasNaoPagas,
        taxaBoleto,
        setTaxaBoleto,
        openAlert,
        setOpenAlert,
      }}
    >
      <ThemeProvider theme={theme}>
        <NavBar sx={{fontFamily: 'Lola'}} />
        
          <Container className="container-main" sx={{marginTop: '78px', position: 'absolute', maxWidth: '415px', fontFamily: 'Lola'}} fixed>
          {dados ? (
            <Routes>
              <Route path="/portal" element={<Home />} />
              <Route path="/portal/cliente" element={<Cliente />} />
              <Route path="/portal/financeiro" element={<Financeiro />} />
              <Route path="/portal/beneficios" element={<Beneficios />} />
              <Route path="/portal/upgrade" element={<Upgrade />} />
              <Route path="/portal/fale-conosco" element={<FaleConosco />} />
              <Route path="/portal/checkout" element={<Checkout />} />
              <Route path="/portal/cartao" element={<Cartao />} />
              <Route path="/portal/checkup-anual" element={<CheckupAnual />} />
            </Routes>
          ) : (
            <NoPage />
          )}
          <div className='footer'>

          </div>
        </Container>
       
        
      </ThemeProvider>
    </ContextAPI.Provider>
    </div>
  );
}

export default App;
