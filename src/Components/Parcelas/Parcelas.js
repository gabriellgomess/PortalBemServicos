import { Card, Box, Typography, Divider, Button } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import React, { useState, useContext, useEffect } from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import CardParcelas from "../CardParcelas/CardParcelas";
import collect from "collect.js";
import { Link } from "react-router-dom";
import "./Parcelas.css";
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CircularProgress from '@mui/material/CircularProgress';

const Parcelas = () => {
  const { parcelaPaga, setParcelaPaga } = useContext(ContextAPI);
  const { parcelasNaoPagas, setParcelasNaoPagas } = useContext(ContextAPI);
  const { selecionadas, setSelecionadas } = useContext(ContextAPI);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "row" },
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{ maxHeight: "500px", overflow: "auto", padding: 2 }}>
        {parcelasNaoPagas?.map((item) => {
          return <CardParcelas key={item.id} parcelas={item} />;
        })}
      </Box>
      {parcelaPaga ? <CardParcelas parcelas={parcelaPaga} /> : null}
      <Divider sx={{ width: "100%", marginTop: 3 }} />
      <Box
        elevation={6}
        sx={{
          width: "100%",
          height: "140px",
          marginTop: "20px",
          background: "#fff",
          borderRadius: "15px",
        }}
      ></Box>
      {selecionadas.length > 0 ? (
        <Box sx={{ marginTop: '20px', width: '100%' }}>
          <Link to="/portal/checkout">
            <Button width='100%' className="btn-pagar" variant="contained">
              Pagar
            </Button>
          </Link>         
        </Box>
      ) : (
        <Alert sx={{ marginTop: '20px', width: '91%' }} severity="info">
          Selecione a(as) parcela(s) que deseja pagar
        </Alert>
      )}
       <Link to="">
            <Button width='100%' className="btn-atualizar" variant="outlined" endIcon={<CreditScoreIcon />}>
              Atualize seu cartão 
            </Button>
          </Link>
    </Box>
  );
};

export default Parcelas;
