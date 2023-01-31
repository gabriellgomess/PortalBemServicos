import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import collect from "collect.js";
import moment from "moment";

const CardParcelas = (props) => {
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

  return (
    <Card elevation={12} sx={{ marginTop: 3, height: "140px", width: { xs: '100%', sm: '100%', md: '420px', lg: '370px'} }}>
      <CardContent sx={{padding: '16px 16px 0 16px'}}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
      <CardActions sx={{padding: '0 8px 8px 8px'}}>
        <Button size="small">Saiba Mais</Button>
      </CardActions>
    </Card>
  );
};

export default CardParcelas;
