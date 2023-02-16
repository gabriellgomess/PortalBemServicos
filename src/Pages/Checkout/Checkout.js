
import React, { useState, useContext, useEffect } from "react";
import FormCobranca from "../../Components/FormCobranca/FormCobranca";
import ContextAPI from "../../ContextAPI/ContextAPI";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Checkout = () => {
   const history = useNavigate();

  const handleVoltar = () => {
    history(-1);
  };
const { dados, setDados } = useContext(ContextAPI);
const { selecionadas, setSelecionadas } = useContext(ContextAPI);
  return (
  <div>
     <Button
        className="button-updatecard"
        variant="text"
        startIcon={<ArrowBackIosNewIcon />}
        onClick={handleVoltar}
        sx={{ color: "#808080", marginBottom: 0, padding: 0 }}
      >
        Voltar
      </Button>
    <FormCobranca dados={dados} pagar={selecionadas} />
  </div>
  );
};

export default Checkout;
