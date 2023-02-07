import React, { useContext } from "react";
import "./DadosCliente.css";
import ContextAPI from "../../ContextAPI/ContextAPI";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
            
              {dados.apolice_titulo? 
              (
                <Typography variant="h6" gutterBottom>Plano <span style={{fontWeight: 'bold'}}>{dados.apolice_titulo}</span></Typography>  
              ):(
                <Typography variant="h6" gutterBottom>Plano não informado</Typography> 
              )
              }          
          </Box>
      ) : (
        <h1>Dados inconsistentes</h1>
      )}
    </>
  );
};

export default DadosCliente;
