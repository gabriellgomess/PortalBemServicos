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
import "./CardParcelas.css";

const CardParcelas = (props) => {
    const {selecionadas, setSelecionadas} = useContext(ContextAPI);
   
  const statusParcela = (status) => {
    if (status === "2") {
      return (
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Não Pago
        </Typography>
      );
    } else if (status === "1") {
      return (
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Pago
        </Typography>
      );
    }
  };

  const handleChange = (event) => {
    if (event.target.checked) {
      setSelecionadas([...selecionadas, event.target.value]);
    } else {
      setSelecionadas(selecionadas.filter((parcela) => parcela !== event.target.value));
    }
  };

  return (
    <Card
      className={
        props.parcelas.transacao_recebido === "1"
          ? "status-pago"
          : "status-nao-pago"
      }
      elevation={12}
      sx={{
        margin: {
          xs: "10px auto",
          sm: "10px auto",
          md: "10px 0",
          lg: "10px 0",
        },
        height: "140px",
        width: { xs: "100%", sm: "80%", md: "420px", lg: "370px" },
      }}
    >
      <CardContent sx={{ padding: "16px 16px 0 16px" }}>
        {props.parcelas.transacao_recebido === "1" ? (
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Última Parcela Paga
          </Typography>
        ) : null}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {props.parcelas.transacao_recebido === "2" ? (
            <FormControlLabel
              sx={{
                margin: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "18px",
              }}
              value="end"
              control={<Checkbox value={props.parcelas.transacao_id} onChange={handleChange} />}
              //   label="End"
              labelPlacement="top"
            />
          ) : null}
          <Box>
            <Typography
              sx={{ fontSize: 14, margin: 0 }}
              color="text.secondary"
              gutterBottom
            >
              Parcela {props.parcelas.transacao_parcela}
            </Typography>
            <Typography variant="h5" component="div">
              {parseFloat(props.parcelas.transacao_valor).toLocaleString(
                "pt-br",
                {
                  style: "currency",
                  currency: "BRL",
                }
              )}
            </Typography>
            {statusParcela(props.parcelas.transacao_recebido)}
          </Box>
          <Box>
            <Typography variant="body2">
              Vencimento:{" "}
              {moment(props.parcelas.transacao_data).format("DD/MM/YYYY")}
            </Typography>
            <Typography variant="body2">
              {props.parcelas.transacao_id}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ padding: "0 8px 8px 8px" }}>
        <Button size="small">Saiba Mais</Button>
      </CardActions>
    </Card>
  );
};

export default CardParcelas;
