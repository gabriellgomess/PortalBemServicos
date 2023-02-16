import React, {useContext, useState, useEffect} from "react";
import "./Cliente.css";
import ContextAPI from "../../ContextAPI/ContextAPI";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";



const Cliente = () => {
    const {dados, setDados} = useContext(ContextAPI);
    const handleFormatCPF = (cpf) => {
        return cpf?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      };

    const history = useNavigate();

    const handleVoltar = () => {
        history(-1);
    }

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
        <Box sx={{width: "90%", textAlign: 'center', margin: '0 auto'}}>
            <Typography mt={2} className="title-financeiro" variant="h5">Seus Dados</Typography>
            <Typography mt={3} className="text-default text-bold" variant="h6">{dados.cliente_nome}</Typography>
            <Typography className="text-default" variant="h6">Plano <span className="text-bold">{dados.apolice_titulo}</span></Typography>
            <Typography className="text-default" variant="h6">{dados.vendas_num_apolice}</Typography>
            <Typography className="text-default" variant="h6">{handleFormatCPF(dados.cliente_cpf)}</Typography>
            <Typography className="text-default" variant="h6">{dados.cliente_cidade} - {dados.cliente_uf}</Typography>            
        </Box>
        </>
        
    );
    }

export default Cliente;