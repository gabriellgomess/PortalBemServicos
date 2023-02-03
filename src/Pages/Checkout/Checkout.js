
import React, { useState, useContext, useEffect } from "react";
import FormCobranca from "../../Components/FormCobranca/FormCobranca";
import ContextAPI from "../../ContextAPI/ContextAPI";

const Checkout = () => {
const { dados, setDados } = useContext(ContextAPI);
const { selecionadas, setSelecionadas } = useContext(ContextAPI);
  return (
  <div>
    <FormCobranca dados={dados} pagar={selecionadas} />
  </div>
  );
};

export default Checkout;
