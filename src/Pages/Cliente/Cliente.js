import React from "react";
import "./Cliente.css";
import DadosCliente from "../../Components/DadosCliente/DadosCliente";


import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";


const Cliente = () => {
    return (
        <>
        <h1>Cliente</h1>
          <Alert severity="warning">
            <AlertTitle>Atenção</AlertTitle>
            Você possui parcelas em atraso —{" "}
            <strong>Regularize hoje mesmo</strong>
          </Alert>
        <div className="container--cliente">
        <DadosCliente />
        
        </div>
        </>
    );
    }

export default Cliente;