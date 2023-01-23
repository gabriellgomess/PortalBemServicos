import React from "react";
import "./Cliente.css";
import DadosCliente from "../../Components/DadosCliente/DadosCliente";
import AlertaParcelas from "../../Components/AlertaParcelas/AlertaParcelas";


const Cliente = () => {
    return (
        <>
        <AlertaParcelas />
        <div className="container--cliente">
        <DadosCliente />        
        </div>
        </>
    );
    }

export default Cliente;