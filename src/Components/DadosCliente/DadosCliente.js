import React, { useContext } from "react";
import "./DadosCliente.css";
import ContextAPI from "../../ContextAPI/ContextAPI";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonIcon from '@mui/icons-material/Person';

const DadosCliente = () => {
  const { dados, setDados } = useContext(ContextAPI); 

  const handleFormatCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

 
  return (
    <>
      {dados.cliente_nome ? (                 
          <Box sx={{color: '#fff'}}>           
            <Typography className="nome-cliente" variant="h6" component="div" gutterBottom >
              Olá <strong>{dados.cliente_nome}</strong>
            </Typography>
            <Typography variant="h6" gutterBottom>
              {dados.vendas_num_apolice? `${dados.vendas_num_apolice}` : '000000000000'}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {dados.apolice_titulo}
            </Typography>            
          </Box>
        
      ) : (
        <h1>Dados inconsistentes</h1>
      )}
    </>
  );
};

export default DadosCliente;
