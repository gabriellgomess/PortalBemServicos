import React, { useState, useContext, useEffect } from "react";
import "./CheckupAnual.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Box from "@mui/material/Box";

const CheckupAnual = () => {
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
      <Typography className="title-checkup" variant="h5">
        Checkup Anual
      </Typography>
      <Box className="box-checkup" sx={{width: '80%', textAlign: 'center', margin: '30px auto'}}>
        <Typography className="text-checkup" variant="body1">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </Typography>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Button className="button-checkup" variant="contained">
          Agende agora!
        </Button>
      </Box>
      
    </div>
  );
};

export default CheckupAnual;
