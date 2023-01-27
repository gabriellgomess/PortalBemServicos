import React, {useState, useContext, useEffect} from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Link from '@mui/material/Link';
import ContextAPI from "../../ContextAPI/ContextAPI";
import axios from "axios";


const AlertaParcelas = () => {
    const { statusParcelas, setStatusParcelas } = useContext(ContextAPI);
    const { relatorio, setRelatorio } = useContext(ContextAPI);
    const { dados, setDados } = useContext(ContextAPI);

    useEffect(() => {        
          handleAlertaParcelas()
          
      }, []);
      
    const handleAlertaParcelas = () => { 
       let result = relatorio.filter(item => item.transacao_recebido == 2)
       
       let resultLength = result.length
       if(resultLength > 0){
        return (
            <Alert sx={{marginTop: 3}} severity="error">
              <AlertTitle>Atenção</AlertTitle>
              Você tem <strong>{resultLength}</strong> {resultLength > 1 ? 'parcelas vencidas' : 'parcela vencida'} clique <Link to="/portal/financeiro">aqui</Link> para ver mais detalhes
            </Alert>
           
          );
         }else{
            return (
                <Alert sx={{marginTop: 3}} severity="success">
                <AlertTitle>Parabéns</AlertTitle>
                Você não tem parcelas vencidas
                </Alert>
            );
        }
    
    }

   
   
    
    return (
        handleAlertaParcelas()
        
    );
}

export default AlertaParcelas;