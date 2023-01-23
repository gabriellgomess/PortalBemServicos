import React, { useContext } from "react";
import "./DadosCliente.css";
import ContextAPI from "../../ContextAPI/ContextAPI";

import Card from "@mui/material/Card";
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
                 
          <Card          
            sx={{
              width: { xs: "100%", md: 375 },
              padding: 2,
              marginTop: 3,
            }}
          >
            <Typography variant="h6" component="div" gutterBottom sx={{display: 'flex', alignItems: 'center'}}>
              <PersonIcon /> Dados do Cliente
            </Typography>
            <Typography variant="h6" component="div" gutterBottom>
              {dados.cliente_nome}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Nº Apólice: {handleFormatCPF(dados.vendas_num_apolice)}
            </Typography>
            <Typography variant="body2" gutterBottom>
              E-mail: {dados.cliente_email}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Telefone: {dados.cliente_telefone}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Endereço: {dados.cliente_endereco}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Complemento: {dados.cliente_complemento}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Bairro: {dados.cliente_bairro}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Cidade: {dados.cliente_cidade}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Estado: {dados.cliente_uf}
            </Typography>
          </Card>
        
      ) : (
        <h1>Dados inconsistentes</h1>
      )}
    </>
  );
};

export default DadosCliente;
