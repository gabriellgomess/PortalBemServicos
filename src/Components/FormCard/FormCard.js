import React, { useState } from "react";
import "./FormCard.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

const FormCard = () => {
  const [card, setCard] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  const [cardSend, setCardSend] = useState([])

  const handleInputFocus = (e) => {
    setCard({ ...card, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };

  const { register, handleSubmit, reset, errors } = useForm();
  console.log(card)
  const onSubmit = (data) => {
    setCardSend({ ...card, [data.name]: data.value });
    reset();
  };

  const locale = {
    valid: "validade",
    month: "mês",
    year: "ano",
    cvc: "cvc",
    name: "nome",
    number: "número do cartão",
  };

  return (
    <div className="cartao">
      
      <Card className="form-card" sx={{ width: 300, padding: 5 }}>
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
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          noValidate
          autoComplete="off"
          sx={{width: '100%', marginTop: 3}}
        >
          <TextField
            type="tel"
            {...register("number")}
            id="number"
            label="Número do Cartão"
            variant="outlined"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          <TextField
            type="text"
            {...register("name")}
            id="name"
            label="Nome do Titular"
            variant="outlined"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            sx={{ marginBottom: 2, width: '100%' }}
          />
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <TextField
              type="tel"
              {...register("expiry")}
              id="expiry"
              label="Validade"
              variant="outlined"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              sx={{ marginBottom: 2, width: '48%' }}
            />
            <TextField
              type="tel"
              {...register("cvc")}
              id="cvc"
              label="CVC"
              variant="outlined"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              sx={{ marginBottom: 2, width: '48%' }}
            />
          </Box>

          <Button
            sx={{ marginTop: 5 }}
            type="submit"
            variant="contained"
            color="primary"
          >
            finalizar
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default FormCard;
