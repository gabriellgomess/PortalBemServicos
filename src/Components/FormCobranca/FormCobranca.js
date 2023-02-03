import React, { useEffect, useState, useContext } from "react";
import collect from "collect.js";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import FormCard from "../FormCard/FormCard";
import FormBoleto from "../FormBoleto/FormBoleto";
import "./FormCobranca.css";
import ContextAPI from "../../ContextAPI/ContextAPI";

const FormCobranca = (props) => {
 
  const [formaPagamento, setFormaPagamento] = useState("");
  const { taxaBoleto, setTaxaBoleto } = useContext(ContextAPI);
  console.log("TXA BOLETO: ", taxaBoleto);
  console.log("PROPS PAGAR: ", props);
  const handleFormaPagamento = (event) => {
    setFormaPagamento(event.target.value);
  };

  const aPagar = collect(props.pagar).sum("value") + taxaBoleto;
  return (
    <div>
      {props.pagar.length > 0
        ? "Será gerada uma cobrança no valor de " +
          aPagar.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        : ""}

      <Box sx={{ minWidth: 120, marginTop: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Forma de Pagamento
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formaPagamento}
            label="Forma de Pagamento"
            onChange={handleFormaPagamento}
          >
            <MenuItem value={10}>Cartão de Crédito</MenuItem>
            <MenuItem value={20}>Boleto</MenuItem>
            <MenuItem disabled value={30}>
              Pix
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      {formaPagamento === 10 && <FormCard dados={props.dados} />}
      {formaPagamento === 20 && (
        <FormBoleto valorBoleto={aPagar} dados={props.dados} />
      )}
    </div>
  );
};

// sx={
//     {width: {
//         xs: "100%", // 0px - 599px
//         sm: '100%', // 600px - 959px
//         md: '100%', // 960px - 1279px
//         lg: '100%', // 1280px - 1919px
//         xl: '100%'  // 1920px +
//         },
//     }
//     }

export default FormCobranca;
