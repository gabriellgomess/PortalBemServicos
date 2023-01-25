import React, { useState, useContext, useEffect, useRef } from "react";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import ContextAPI from "../../ContextAPI/ContextAPI";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

const FormBoleto = (props) => {
  const [dadosAsaas, setDadosAsaas] = useState([]);
  const { taxaBoleto, setTaxaBoleto } = useContext(ContextAPI);
  const [dataAtual, setDataAtual] = useState();
  const [formData, setFormData] = useState({});
  

  useEffect(() => {
    const data = {
      cpf: props.cpf,
    };
    axios.post("https://www.grupofortune.com.br/integracao/softwareexpress/atualizacao/portal/handlePortal.php?param=2",data)
      .then((res) => {
        if (res.status === 200) {
          setDadosAsaas(res.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setTaxaBoleto(3.5);
    // Pegando a data atual
    const dataAtual = new Date();
    // Adicionando 1 dia a data atual
    const dataVencimento = new Date(dataAtual);
    dataVencimento.setDate(dataAtual.getDate() + 1);
    // Formatando a data
    const dia = dataVencimento.getDate() < 10 ? "0" + dataVencimento.getDate() : dataVencimento.getDate();
    const mes = dataVencimento.getMonth() + 1 < 10 ? "0" + (dataVencimento.getMonth() + 1)
        : dataVencimento.getMonth() + 1;
    const ano = dataVencimento.getFullYear();
    setDataAtual(`${ano}-${mes}-${dia}`);
   
  }, []);
  const handleTaxaBoleto = (e) => {
    if (e.target.checked) {
      setTaxaBoleto(3.5);
    } else {
      setTaxaBoleto(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      customer: dadosAsaas.customer,
      dueDate: dataAtual,
      value: props.valorBoleto,
      description: "Pagamento de mensalidade",
      externalReference: "Mensalidade",
      name: dadosAsaas.cliente_nome,
      cpfCnpj: dadosAsaas.cliente_cpf,
      email: dadosAsaas.cliente_email,
      phone: dadosAsaas.cliente_telefone,
      street: dadosAsaas.cliente_endereco,
      number: dadosAsaas.cliente_numero
    };
    axios.post("https://www.grupofortune.com.br/integracao/softwareexpress/atualizacao/portal/handlePortal.php?param=3",data)
      .then((res) => {
        if (res.status === 200) {
          console.log("RES API: ",res.data);
        }
      }
      )
      .catch((err) => {
        console.log(err);
      });
  };
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
        <form onSubmit={handleSubmit}>
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
              name="customer"
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
              name="nome"
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
              name="cpf"
            />
            <TextField
              id="outlined-basic"
              label="Valor do Boleto"
              variant="outlined"
              sx={{ width: "100%" }}
              InputLabelProps={
                props.valorBoleto ? { shrink: true } : { shrink: false }
              }
              value={
                props.valorBoleto.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }) || ""
              }
              disabled
              name="value"
            />
            <TextField
              id="outlined-basic"
              label="Data de Vencimento"
              type="date"
              variant="outlined"
              InputLabelProps={dataAtual ? { shrink: true } : { shrink: false }}
              defaultValue={dataAtual}
              sx={{ width: "100%" }}
              name="dueDate"
              onChange={(e) => setDataAtual(e.target.value)}
            />
          </Box>
          <Button type="submit" variant="contained" sx={{ marginTop: 3 }}>Gerar Boleto</Button>
          </form>
      </Card>
    </>
  );
};

export default FormBoleto;
