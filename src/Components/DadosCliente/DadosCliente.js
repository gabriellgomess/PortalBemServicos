import React, { useContext } from "react";
import "./DadosCliente.css";
import ContextAPI from "../../ContextAPI/ContextAPI";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';




const DadosCliente = () => {
  const { dados, setDados } = useContext(ContextAPI);

  const handleFormatCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };


  return (
    <div>
      {/* Verifica se dados.cliente_nome existe */}
      {dados.cliente_nome ? (
        <div>
          <h1>Cliente</h1>
          <Alert severity="warning">
            <AlertTitle>Atenção</AlertTitle>
            Você possui parcelas em atraso —{" "}
            <strong>Regularize hoje mesmo</strong>
          </Alert>
          <Card sx={{ width: 375, padding: 2, marginTop: 3, background: 'lightgrey' }}>
            <Typography variant="h6" component="div" gutterBottom>
              {dados.cliente_nome}
            </Typography>
            <Typography variant="body2" gutterBottom>
              CPF: {handleFormatCPF(dados.cliente_cpf)}
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
        </div>
      ) : (
        <h1>Dados inconsistentes</h1>
      )}
    </div>
  );
};

export default DadosCliente;
