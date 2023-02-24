import React, { useContext, useState, useEffect } from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Checkbox, FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import moment from "moment";
import "moment/locale/pt-br";
import "./UpCardParcelas.css";
import Popover from "@mui/material/Popover";

const UpCardParcelas = (props) => {
  const { aPagar, setAPagar } = useContext(ContextAPI);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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

  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      const novoArray = [
        ...aPagar,
        { transacao_id: value, vendas_valor: props.parcelas.vendas_valor },
      ];
      setAPagar(novoArray);
    } else {
      const novoArray = aPagar.filter((item) => item.transacao_id !== value);
      setAPagar(novoArray);
    }
  };

  return (
    <Card
      className={
        props.parcelas.transacao_recebido === "1"
          ? "status-pago"
          : "status-nao-pago"
      }
      elevation={0}
      sx={{
        borderRadius: "12px",
        margin: {
          xs: "10px auto",
          sm: "10px auto",
          md: "10px auto",
          lg: "10px auto",
        },
        height: "60px",
        width: { xs: "100%", sm: "80%", md: "calc(100% - 40px)", lg: "calc(100% - 40px)" },
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
              height: "18px",
            }}
            control={
              <Checkbox
                defaultChecked={true}
                value={props.parcelas.transacao_id}
                onClick={handleCheckBox}
              />
            }        
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
              {parseFloat(props.parcelas.vendas_valor).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
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
          <Typography variant="h6">Detalhes da parcela</Typography>
          <Typography>
            Data de vencimento:{" "}
            {moment(props.parcelas.transacao_data).format("DD/MM/YYYY")}
          </Typography>
          <Typography>ID da Parcela: {props.parcelas.transacao_id}</Typography>
          <Typography>
            Valor:{" "}
            {parseFloat(props.parcelas.transacao_valor).toLocaleString(
              "pt-br",
              {
                style: "currency",
                currency: "BRL",
              }
            )}
          </Typography>
        </Box>
      </Popover>
    </Card>
  );
};

export default UpCardParcelas;
