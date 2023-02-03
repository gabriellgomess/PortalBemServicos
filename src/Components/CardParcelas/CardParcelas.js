import React, { useState, useContext, useEffect } from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Checkbox, FormControlLabel } from "@mui/material";
import collect from "collect.js";
import moment from "moment";
import "moment/locale/pt-br";
import "./CardParcelas.css";
import Popover from "@mui/material/Popover";

const CardParcelas = (props) => {
  const { selecionadas, setSelecionadas } = useContext(ContextAPI);
  const statusParcela = (status) => {
    if (status === "2") {
      return (
        <Typography sx={{ color: "#C1272D" }} variant="h6">
          Não Pago
        </Typography>
      );
    } else if (status === "1") {
      return (
        <Typography sx={{ color: "#006837" }} variant="h6">
          Pago
        </Typography>
      );
    }
  };

  const handleChange = (event) => {
    if (event.target.checked) {
      const parcela = { id: event.target.value, value: props.parcelas.transacao_valor };
      setSelecionadas([...selecionadas, parcela]);
    } else {
      setSelecionadas(
        selecionadas.filter(parcela => parcela.id !== event.target.value)
      );
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Card
      className={
        props.parcelas.transacao_recebido === "1"
          ? "status-pago"
          : "status-nao-pago"
      }
      elevation={3}
      sx={{
        borderRadius: "12px",
        margin: {
          xs: "10px auto",
          sm: "10px auto",
          md: "10px 0",
          lg: "10px 0",
        },
        height: "70px",
        width: { xs: "100%", sm: "80%", md: "420px", lg: "370px" },
      }}
    >
      <CardContent sx={{ padding: "16px 16px 0 16px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {props.parcelas.transacao_recebido === "2" ? (
            <FormControlLabel
              sx={{
                margin: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "18px",
              }}
              value="end"
              control={
                <Checkbox
                  value={props.parcelas.transacao_id}
                  onChange={handleChange}
                />
              }
              //   label="End"
              labelPlacement="top"
            />
          ) : null}
          <Box
            onClick={handleClick}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
              cursor: "pointer",
            }}
          >
            <Typography sx={{ textTransform: "uppercase" }} variant="h6">
              {moment(props.parcelas.transacao_data)
                .locale("pt-br")
                .format("MMM/YYYY")}
            </Typography>
            {statusParcela(props.parcelas.transacao_recebido)}
            <Typography variant="h6">
              {parseFloat(props.parcelas.transacao_valor).toLocaleString(
                "pt-br",
                {
                  style: "currency",
                  currency: "BRL",
                }
              )}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ padding: "10px" }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant='h6'>Detalhes da parcela</Typography>
          <Typography>
            Data de vencimento:{" "}
            {moment(props.parcelas.transacao_data).format("DD/MM/YYYY")}
          </Typography>
          <Typography>ID da Parcela: {props.parcelas.transacao_id}</Typography>
          <Typography>Valor: {parseFloat(props.parcelas.transacao_valor).toLocaleString(
                "pt-br",
                {
                  style: "currency",
                  currency: "BRL",
                }
              )}</Typography>
        </Box>
      </Popover>
    </Card>
  );
};

export default CardParcelas;
