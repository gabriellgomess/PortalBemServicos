import React from "react";
import RelatorioFinanceiro from "../../Components/RelatorioFinanceiro/RelatorioFinanceiro";
import Parcelas from "../../Components/Parcelas/Parcelas";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Box from "@mui/material/Box";

const Financeiro = () => {
  const history = useNavigate();

  const handleVoltar = () => {
    history(-1);
  };
  return (
    // <RelatorioFinanceiro />
    <>
      <Button
        className="button-updatecard"
        variant="text"
        startIcon={<ArrowBackIosNewIcon />}
        onClick={handleVoltar}
        sx={{ color: "#808080 !important", marginBottom: 0, padding: 0 }}
      >
        Voltar
      </Button>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Parcelas />
      </Box>
      
    </>
  );
};

export default Financeiro;
