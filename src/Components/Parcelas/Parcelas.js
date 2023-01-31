import { Card, Box } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import CardParcelas from "../CardParcelas/CardParcelas";
import collect from "collect.js";

const Parcelas = () => {
  const { dados, setDados } = useContext(ContextAPI);
  const { relatorio, setRelatorio } = useContext(ContextAPI);
  const [pagar, setPagar] = useState([]);
  const [taxaBoleto, setTaxaBoleto] = useState(0);
  const [parcelaPaga, setParcelaPaga] = useState([]);
  const [parcelasNaoPagas, setParcelasNaoPagas] = useState([]);

  useEffect(() => {
    let parcelasNaoPagas = relatorio
      .filter((item) => item.transacao_recebido == 2)
      .map((row, index) => {
        return { ...row, id: index };
      });
    setParcelasNaoPagas(parcelasNaoPagas);
  }, []);

  useEffect(() => {
    handleLastParcelaPaga(relatorio);
  }, [relatorio]);

  // Última parcela paga
  const handleLastParcelaPaga = (relatorio) => {
    let parcelas = collect(relatorio);
    let ultimaParcelaPaga = parcelas
      .where("transacao_recebido", "1")
      .sortBy(function (item) {
        return new Date(item.transacao_data);
      })
      .last();
    setParcelaPaga(ultimaParcelaPaga);
  };

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
