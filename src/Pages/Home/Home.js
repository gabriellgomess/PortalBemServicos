import React from "react";
import DadosCliente from "../../Components/DadosCliente/DadosCliente";
import AlertaParcelas from "../../Components/AlertaParcelas/AlertaParcelas";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconBeneficios from "../../assets/icon-beneficios.png";
import IconFinanceiro from "../../assets/icon-financeiro.png";

const Home = () => {
  return (
    <>
      <DadosCliente />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          maxWidth: "380px",
          margin: "0 auto",
        }}
      >
        <Link to="" className="link_alert">
          <Card
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: 1,
              padding: 2,
              color: "grey",
              backgroundColor: "#fff",
              width: "109px",
              height: "109px",
              borderRadius: "10px",
            }}
          >
            <img src={IconBeneficios} alt="" />
            <Typography
              sx={{ lineHeight: "18px" }}
              variant="h6"
              color="secondary"
              textAlign="center"
            >
              Seus Benefícios
            </Typography>
          </Card>
        </Link>
        <Link to="" className="link_alert">
          <Card
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: 1,
              padding: 2,
              color: "grey",
              backgroundColor: "#fff",
              width: "109px",
              height: "109px",
              borderRadius: "10px",
            }}
          >
            <img src={IconFinanceiro} alt="" />
            <Typography variant="h6" color="secondary" textAlign="center">
              Financeiro
            </Typography>
          </Card>
        </Link>
      </Box>
      {/* <AlertaParcelas /> */}
    </>
  );
};

export default Home;
