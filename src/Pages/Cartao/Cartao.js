import React from "react";
import UpdateCard from "../../Components/UpdateCard/UpdateCard";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import "./Cartao.css";

const Cartao = () => {
  const history = useNavigate();

  const handleVoltar = () => {
    history(-1);
  };
  return (
    <>
      <Button
        className="button-updatecard"
        variant="text"
        startIcon={<ArrowBackIosNewIcon />}
        onClick={handleVoltar}
        sx={{ color: "#808080", marginBottom: 0, padding: 0 }}
      >
        Voltar
      </Button>
      <div className="container-cartao">
        <UpdateCard />
      </div>
    </>
  );
};

export default Cartao;
