import React, { useContext, useEffect, useState } from "react";
import "./RelatorioFinanceiro.css";
import Card from "@mui/material/Card";
import ContextAPI from "../../ContextAPI/ContextAPI";
import Typography from "@mui/material/Typography";
import axios from "axios";
import moment from "moment";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Hidden } from "@mui/material";
import Paper from "@mui/material/Paper";

const RelatorioFinanceiro = () => {
  const { dados, setDados } = useContext(ContextAPI);
  const [relatorio, setRelatorio] = useState([]);

  useEffect(() => {    
    axios.post("https://www.grupofortune.com.br/integracao/softwareexpress/atualizacao/portal/busca-info-financeiro.php?id="+dados.vendas_id)
      .then((res) => {
        console.log(res.data);
        setRelatorio(res.data);        
      });
  }, [dados]);

  const handleFormatDate = (date) => {
    moment.locale("pt-br");
    return moment(date).format("DD/MM/YYYY");
  };

  const handleParcelas = (parcelas) => {
    let parcelasArray = parcelas.split(",");
    let count = parcelasArray.length;

    if (count === 1) {
        return "1 parcela"
    } else if(count > 1) {
        return count + " parcelas"
    }else{
        return "Não há parcelas"
    }

  }

  return (
    <Card
      sx={{
        width: { xs: "90%", md: "100%" },
        padding: 2,
        marginTop: 3,
        background: 'rgba(0, 0, 0, 0.54)',
      }}
    >
      <Typography sx={{color: '#fff'}} variant="h6" component="div" gutterBottom>
        Relatório Financeiro
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Transação ID</TableCell>
              <Hidden mdDown>
              <TableCell align="center">ID Boleto</TableCell>
              </Hidden>
              <TableCell align="center">Parcelas Correspondentes</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Vencimento</TableCell>
              <TableCell align="center">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {relatorio?.map((row) => (
              <TableRow key={row.transacao_id}>
                <TableCell component="th" scope="row">
                  {row.transacao_id}
                </TableCell>
                <Hidden mdDown>
                <TableCell align="center">{row.id_boleto}</TableCell>
                </Hidden>
                <TableCell align="center">
                  {handleParcelas(row.parcelas_correspondentes)}
                </TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  {handleFormatDate(row.dueDate)}
                </TableCell>
                <TableCell align="center">
                  {parseFloat(row.value).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default RelatorioFinanceiro;
