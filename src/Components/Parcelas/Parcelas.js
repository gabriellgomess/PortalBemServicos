import { Card, Box } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import CardParcelas from "../CardParcelas/CardParcelas";
import collect from "collect.js";

const Parcelas = () => {

  const {parcelaPaga, setParcelaPaga} = useContext(ContextAPI);
  const {parcelasNaoPagas, setParcelasNaoPagas} = useContext(ContextAPI);

  return (
    <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row', md: 'row' }, flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {parcelasNaoPagas?.map((item) => {
        return <CardParcelas key={item.id} parcelas={item} />;
      })}
      {parcelaPaga ? <CardParcelas parcelas={parcelaPaga} /> : null}
    </Box>
  );
};

export default Parcelas;
