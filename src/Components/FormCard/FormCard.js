import React, { useState, useContext, useEffect } from "react";
import "./FormCard.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import ContextAPI from "../../ContextAPI/ContextAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
var valid = require("card-validator");

const FormCard = () => {
  const [card, setCard] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  
  const { taxaBoleto, setTaxaBoleto } = useContext(ContextAPI);
  const [cardExpiry, setCardExpiry] = useState("");

  useEffect(() => {
    setTaxaBoleto(0);
  }, []);

  const handleInputFocus = (e) => {
    setCard({ ...card, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;    
   
      setCard({ ...card, [name]: value });
    
    
    console.log("CARD: ", card);
  };

  const handleInputChangeExpiry = (value) => {
    let expiry = value.replace(/\D/g, ''); // remover qualquer caractere que não seja número
    setCard({ ...card, expiry });
    console.log("CARD: ", card);
  };

  const { register } = useForm();

  const handleSend = () => {
    console.log("CARD SEND: ", card);
    toast.success("Pagamento efetuado com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const locale = {
    valid: "validade",
    month: "mês",
    year: "ano",
    cvc: "cvc",
    name: "nome",
    number: "número do cartão",
  };

  const handleExpiryChange = (event) => {
    const value = event.target.value;
    let formattedValue = value
      .replace(/\D/g, "")
      .slice(0, 4)
      .replace(/(\d{2})/, "$1/");
    setCardExpiry(formattedValue);
    if(event.target.name === 'expiry'){
      let expiry = (event.target.value).split("/").join("")
      handleInputChangeExpiry(expiry)
    }
  };

  const handleValidateNumber = () => {
    const cardNumberValidation = valid.number(card.number);
    if (!cardNumberValidation.isValid && card.number.length > 0) {
      toast.error("Número de cartão inválido!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
  };

  return (
    <div className="cartao">
      <Card
        className="form-card"
        sx={{ width: 300, padding: 5, margin: "10px auto" }}
      >
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Cards
          locale={locale}
          cvc={card.cvc}
          expiry={card.expiry}
          focused={card.focus}
          name={card.name}
          number={card.number}
        />
        <Box
          className="container-form-card"
          component="form"
          noValidate
          autoComplete="off"
          sx={{ width: "100%", marginTop: 3 }}
        >
          <TextField
            type="tel"
            {...register("number")}
            id="number"
            label="Número do Cartão"
            variant="outlined"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleValidateNumber}
            sx={{ marginBottom: 2, width: "100%" }}
          />
          <TextField
            type="text"
            {...register("name")}
            id="name"
            label="Nome do Titular"
            variant="outlined"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            sx={{ marginBottom: 2, width: "100%" }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              type="tel"
              {...register("expiry")}
              id="expiry"
              label="Validade"
              variant="outlined"
              value={cardExpiry}
              onChange={handleExpiryChange}
              onFocus={handleInputFocus}
              sx={{ marginBottom: 2, width: "48%" }}
            />
            <TextField
              type="tel"
              {...register("cvc")}
              id="cvc"
              label="CVC"
              variant="outlined"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              sx={{ marginBottom: 2, width: "48%" }}
            />
          </Box>
          <Button
            onClick={() => handleSend()}
            type="button"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            finalizar
          </Button>         
        </Box>
      </Card>
    </div>
  );
};

export default FormCard;
