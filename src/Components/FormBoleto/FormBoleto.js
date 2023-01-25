import React, { useState, useContext, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import ContextAPI from "../../ContextAPI/ContextAPI";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const FormBoleto = (props) => {
  const [dadosAsaas, setDadosAsaas] = useState([]);
  const { taxaBoleto, setTaxaBoleto } = useContext(ContextAPI);
  useEffect(() => {
    const data = {
      cpf: props.cpf,
    };
    axios
      .post(
        "https://www.grupofortune.com.br/integracao/softwareexpress/atualizacao/portal/consulta-cliente-asaas.php",
        data
      )
      .then((res) => {
        if (res.status === 200) {
          setDadosAsaas(res.data[0]);      
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setTaxaBoleto(3.5);
    
  }, []);
  const handleTaxaBoleto = (e) => {
    if (e.target.checked) {
      setTaxaBoleto(3.5);
    } else {
      setTaxaBoleto(0);
    }
  }

  return (
    <>
      <Card sx={{ marginTop: 3, padding: 3 }}>
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          Gerar Boleto para Pagamento
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch onChange={(e) => handleTaxaBoleto(e)} defaultChecked />
            }
            label="Taxa do boleto (R$3,50)"
          />
        </FormGroup>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: 3,
          }}
        >
        
          <TextField
            id="outlined-basic"
            label="ID do Cliente"
            variant="outlined"
            InputLabelProps={
                dadosAsaas.customer ? { shrink: true } : { shrink: false }
            }
            sx={{ width: "100%" }}
            value={dadosAsaas.customer || ""}
            disabled
          />
          <TextField
            id="outlined-basic"
            label="Nome do Titular"
            variant="outlined"
            sx={{ width: "100%" }}
            InputLabelProps={
                dadosAsaas.cliente_nome ? { shrink: true } : { shrink: false }
            }
            value={dadosAsaas.cliente_nome || ""}
            disabled
          />
          <TextField
            id="outlined-basic"
            label="CPF do Titular"
            variant="outlined"
            sx={{ width: "100%" }}
            InputLabelProps={
                dadosAsaas.cliente_cpf ? { shrink: true } : { shrink: false }
            }
            value={dadosAsaas.cliente_cpf || ""}
            disabled
          />
          <TextField
            id="outlined-basic"
            label="Valor do Boleto"
            variant="outlined"
            sx={{ width: "100%" }}
            InputLabelProps={
                props.valorBoleto ? { shrink: true } : { shrink: false }
            }
            value={props.valorBoleto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || ""}
            disabled
          />
        </Box>
      </Card>
    </>
  );
};

export default FormBoleto;
