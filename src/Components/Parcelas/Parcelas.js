import { Card, Box, Typography, Divider, Button } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import React, { useState, useContext, useEffect } from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import CardParcelas from "../CardParcelas/CardParcelas";
import collect from "collect.js";
import { Link } from "react-router-dom";
import "./Parcelas.css";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import CircularProgress from "@mui/material/CircularProgress";

const Parcelas = () => {
  const { parcelaPaga, setParcelaPaga } = useContext(ContextAPI);
  const { parcelasNaoPagas, setParcelasNaoPagas } = useContext(ContextAPI);
  const { selecionadas, setSelecionadas } = useContext(ContextAPI);
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "column" },
        flexWrap: "wrap",
        justifyContent: "center",
        width: { xs: "100%", sm: "100%", md: "60%" },
      }}
    >
      <Typography className="title-financeiro" variant="h5">Financeiro</Typography>
      <Box sx={{ maxHeight: "322px", overflow: "auto", padding: 2, display: 'block'}}>
        {parcelasNaoPagas?.map((item) => {
          return <CardParcelas key={item.id} parcelas={item} />;
        })}
      </Box>
      <Box sx={{ maxHeight: "322px", overflow: "auto", padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {parcelaPaga ? <CardParcelas parcelas={parcelaPaga} /> : null}
      </Box>
      <Divider sx={{ width: "100%", marginTop: 3 }} />
      <Box
        elevation={6}
        sx={{
          width: "calc(100% - 40px)",
          height: "70px",
          marginTop: "20px",
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Typography>Valor</Typography>
          <Typography>R$247,50</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Typography>Desconto</Typography>
          <Typography>50%</Typography>
        </Box>
        <Divider sx={{ width: "100%", marginTop: 3 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Typography>Total</Typography>
          <Typography>R$123,75</Typography>
        </Box>
      </Box>
      {selecionadas.length > 0 ? (
        <Box sx={{ marginTop: "20px", width: "100%" }}>
          <Link to="/portal/checkout">
            <Button width="100%" className="btn-pagar" variant="contained">
              Pagar
            </Button>
          </Link>
        </Box>
      ) : (
        <Alert sx={{ marginTop: "20px", width: "91%" }} severity="info">
          Selecione a(as) parcela(s) que deseja pagar
        </Alert>
      )}
      <Link to="/portal/cartao">
        <Button
          width="100%"
          className="btn-atualizar"
          variant="outlined"
          endIcon={<CreditScoreIcon />}
        >
          Atualize seu cartão
        </Button>
      </Link>
    </Box>
  );
};

export default Parcelas;
