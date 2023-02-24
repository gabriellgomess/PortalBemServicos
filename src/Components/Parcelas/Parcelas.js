import { Box, Typography, Divider, Button } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import React, { useContext, useState, useEffect } from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import UpCardParcelas from "../CardParcelas/UpCardParcelas";
import collect from "collect.js";
import { Link } from "react-router-dom";
import "./Parcelas.css";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const Parcelas = () => {
  const { parcelaPaga } = useContext(ContextAPI);
  const { parcelasNaoPagas } = useContext(ContextAPI);
  const { selecionadas } = useContext(ContextAPI);
  const { aPagar, setAPagar } = useContext(ContextAPI);
  const totalNaoPagas = collect(aPagar).sum("vendas_valor");



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
      <Typography className="title-financeiro" variant="h5">
        Financeiro
      </Typography>
      <Box
        sx={{
          maxHeight: "322px",
          overflow: "auto",
          padding: 2,
          display: "block",
        }}
      >
        {parcelasNaoPagas?.map((item) => {
          return <UpCardParcelas key={item.id} parcelas={item} />;
        })}
      </Box>
      <Box
        sx={{
          maxHeight: "322px",
          overflow: "auto",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {parcelaPaga ? <UpCardParcelas parcelas={parcelaPaga} /> : null}
      </Box>

      <Box
        elevation={6}
        sx={{
          width: "calc(100% - 40px)",
          // height: "80px",
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        {parcelasNaoPagas.length > 2 ? (
          <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 20px",
          }}
        >
          <Typography>Valor</Typography>
          <Typography>
            {parseFloat(totalNaoPagas).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Typography>Desconto</Typography>
          <Typography>{aPagar.length > 2 ? "30%" : "0%"}</Typography>
        </Box>
        <Divider sx={{ width: "100%", marginTop: 3 }} />
        </>
        ) : null}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">
            {parseFloat((aPagar.length > 2 ? (totalNaoPagas-(totalNaoPagas*30/100)):totalNaoPagas)).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}

          </Typography>
        </Box>
      </Box>
      {aPagar.length > 0 ? (
        <Box sx={{ marginTop: "20px", width: "100%" }}>
          <Link to="/portal/checkout">
            <Button width="100%" className="btn-pagar" variant="contained">
              Pagar
            </Button>
          </Link>
        </Box>
      ) : (
        <Alert
          sx={{ margin: "20px auto 0 auto", width: "91%" }}
          severity="info"
        >
          Selecione a(as) parcela(s) que deseja pagar
        </Alert>
      )}
      <Link to="/portal/cartao">
        <Button
          width="100%"
          className="btn-atualizar"
          variant="contained"
          endIcon={<CreditScoreIcon />}
        >
          Atualize seu cartão
        </Button>
      </Link>
    </Box>
  );
};

export default Parcelas;
