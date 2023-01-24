import React, { useState, useContext, useEffect } from "react";


import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";


const FormBoleto = (props) => {
    const [dadosAsaas, setDadosAsaas] = useState([]);
    useEffect(() => {
        const data = {
            'cpf' : props.cpf
        }
        axios.post(
            "https://www.grupofortune.com.br/integracao/softwareexpress/atualizacao/portal/consulta-cliente-asaas.php", data              
          )
          .then((res) => {
            if (res.status === 200) {
              setDadosAsaas(res.data);             
            }
          })
          .catch((err) => {
            console.log(err);
          });
    }, [])
    console.log("DADOS ASAAS", dadosAsaas)
  return (
    <>
    <Card sx={{marginTop: 3, padding: 3}}>
        <Typography variant="h6" sx={{display: 'flex', alignItems: 'center'}}>
            Gerar Boleto para Pagamento
        </Typography>        
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, marginTop: 3}}>
            <TextField
                id="outlined-basic"
                label="ID do Cliente"
                variant="outlined"
                sx={{width: '100%'}}
            />
            <TextField
                id="outlined-basic"
                label="Nome do Titular"
                variant="outlined"
                sx={{width: '100%'}}
            />
            <TextField
                id="outlined-basic"
                label="CPF do Titular"
                variant="outlined"
                sx={{width: '100%'}}
            />
            <TextField
                id="outlined-basic"
                label="Valor do Boleto"
                variant="outlined"
                sx={{width: '100%'}}
            />
        </Box>
    </Card>
    </>
  );
};

export default FormBoleto;
