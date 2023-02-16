import React, { useState, useContext, useEffect } from "react";
import "./FaleConosco.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const FaleConosco = () => {
  const history = useNavigate();

  const handleVoltar = () => {
    history(-1);
  };
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
      <h1>FaleConosco</h1>
    </div>
  );
};

export default FaleConosco;
