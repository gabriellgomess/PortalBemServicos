import { Card, Box, Typography, Divider, Button } from "@material-ui/core";
import Alert from '@mui/material/Alert';
import React, { useState, useContext, useEffect } from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import CardParcelas from "../CardParcelas/CardParcelas";
import collect from "collect.js";
import { Link } from 'react-router-dom';
import "./Parcelas.css";

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
      }}
    >
      <Box sx={{ maxHeight: "500px", overflow: "auto", padding: 2 }}>
        {parcelasNaoPagas?.map((item) => {
          return <CardParcelas key={item.id} parcelas={item} />;
        })}
      </Box>
      <Divider sx={{ margin: 3 }} />
      <Typography
        variant="h6"
        sx={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}
      >
        Última parcela paga
      </Typography>
      {parcelaPaga ? <CardParcelas parcelas={parcelaPaga} /> : null}
      
      {selecionadas.length > 0 ? (
        <Link to="/portal/checkout">
        <Button className="btn-pagar" variant='contained'>Pagar</Button>
      </Link>
      ) : (<Alert sx={{marginTop: 2, width: 330}} severity="info">Selecione a(as) parcela(s) que deseja pagar</Alert>)
        }
    </Box>
  );
};

export default Parcelas;
