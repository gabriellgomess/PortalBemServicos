import React, { useState, useContext, useEffect } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ContextAPI from "../../ContextAPI/ContextAPI";
import "./AlertaParcelas.css";

const AlertaParcelas = () => {
  const { relatorio, setRelatorio } = useContext(ContextAPI);


  useEffect(() => {
    handleAlertaParcelas();
  }, []);
  

  const handleAlertaParcelas = () => {
    let result = relatorio.filter((item) => item.transacao_recebido == 2);

    let resultLength = result.length;
    if ( resultLength > 0 ) {
      return (
        <Link to="/portal/financeiro">
        <Alert className="alert-nao-pago" icon={false} sx={{ width:{sx: '100%', sm: '100%', md: '60%'}, margin: '30px auto', backgroundColor: '#FFC4BF', borderRadius: '13px', border: '0.3px solid #BA272D', display: 'flex', alignItems: 'center' }} severity="error">
          <Box sx={{width: 'fit-content'}}>
            <WarningAmberIcon sx={{ fontSize: 40, color: '#E7334A' }} />
          </Box>
          <Box sx={{marginLeft: 1, display: 'flex', alignItems: 'center'}}>
            <span>Você tem <strong>{resultLength}</strong> {resultLength > 1 ? "parcelas vencidas" : "parcela vencida"} clique aqui para ver mais detalhes</span>
          </Box>
        </Alert>
        </Link>
      );
    } else {
      return (
        <Alert sx={{ marginTop: 3 }} severity="success">
          <AlertTitle>Parabéns</AlertTitle>
          Seu plano está em dia!
        </Alert>
      );
    }
  };
  return handleAlertaParcelas();
};

export default AlertaParcelas;
