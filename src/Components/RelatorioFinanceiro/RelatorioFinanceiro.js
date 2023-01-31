import React, { useEffect, useState, useContext } from "react";
import { DataGrid, ptBR } from "@mui/x-data-grid";
import ContextAPI from "../../ContextAPI/ContextAPI";
import axios from "axios";
import moment from "moment";
import PopoverParcelas from "../PopoverParcelas/PopoverParcelas";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./RelatorioFinanceiro.css";
import FormCobranca from "../FormCobranca/FormCobranca";
import collect from "collect.js";
import { ConnectingAirportsOutlined, PagesSharp } from "@mui/icons-material";
import RelatorioBoleto from "../RelatorioBoletos/RelatorioBoleto";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const RelatorioFinanceiro = () => {
  const { dados, setDados } = useContext(ContextAPI);
  const {relatorio, setRelatorio} = useContext(ContextAPI);
  const [pagar, setPagar] = useState([]);
  const [taxaBoleto, setTaxaBoleto] = useState(0);
  const [parcelaPaga, setParcelaPaga] = useState([]);



  useEffect(() => {
    handleLastParcelaPaga(relatorio);
  }, [relatorio]);

  // Última parcela paga
  const handleLastParcelaPaga = (relatorio) => {
    console.log("Relatorio ", relatorio);
    let parcelas = collect(relatorio);
    let ultimaParcelaPaga = parcelas
      .where("transacao_recebido", "1")
      .sortBy(function (item) {
        return new Date(item.transacao_data);
      })
      .last();
    setParcelaPaga(ultimaParcelaPaga);
  }

  const handleFormatDate = (date) => {
    moment.locale("pt-br");
    return moment(date).format("DD/MM/YYYY");
  };
  

  return (
    <div style={{ height: 400, width: "100%" }}>
      {relatorio ? 
      <ContextAPI.Provider value={{pagar, setPagar, taxaBoleto, setTaxaBoleto}}>
        {parcelaPaga?      
        <Alert sx={{marginTop: 2}} severity="success">
          <AlertTitle><strong>Última parcela paga</strong></AlertTitle>
          <strong>{parcelaPaga.transacao_id}</strong> - Foi paga em <strong>{handleFormatDate(parcelaPaga.transacao_data)}</strong> - no valor de <strong>{parseFloat(parcelaPaga.transacao_valor).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}</strong>
        </Alert>
        : null}     
        <DataTable relatorio={relatorio} />
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: 'wrap' }}>
        <FormCobranca dados={dados} pagar={pagar} />        
        </Box>       
      </ContextAPI.Provider> 
        : "Carregando..."}        
    </div>
  );
};

const DataTable = ({ relatorio }, {dados}) => {
  const {pagar, setPagar} = useContext(ContextAPI);
  const handleFormatDate = (date) => {
    moment.locale("pt-br");
    return moment(date).format("DD/MM/YYYY");
  };

  const handleCheckStatus = (status) => {
    if (status === 1) {
      return (
        <Typography
          sx={{ color: "#388e3c", fontWeight: "bold" }}
          variant="body2"
        >
          Pago
        </Typography>
      );
      // return "Pago";
    } else if (status == 2) {
      return (
        <Typography
          sx={{ color: "#d32f2f", fontWeight: "bold" }}
          variant="body2"
        >
          Não Pago
        </Typography>
      );     
    }
  }
  
  const columns = [    
    { field: "transacao_id", 
      headerName: "ID Transação", 
      width: 260,
      sortable: false
    },    
    {
      field: "transacao_data",
      headerName: "Data da Transação",
      width: 170,
      alignItems: 'center',
      valueFormatter: (params) => handleFormatDate(params.value),
      cellClassName: 'cell-align-center',
      sortable: false,
      
    },
    
    {
      field: "transacao_mes",
      headerName: "Mês da Transação",
      width: 170,
      // renderCell: (params) => <PopoverParcelas parcelas={params.value} />,
      cellClassName: 'cell-align-center',
      sortable: false
    },
    {
      field: "transacao_parcela",
      headerName: "Parcela",
      width: 120,
      alignItems: 'center',
      // renderCell: (params) => handleCheckStatus(params.value),
      cellClassName: 'cell-align-center',
      sortable: false
    },
    {
      field: "transacao_recebido",
      headerName: "Status",
      width: 120,
      alignItems: 'center',
      cellClassName: 'cell-align-center',
      renderCell: (params) => handleCheckStatus(params.value),
      sortable: false
    },
    {
      field: "transacao_valor",
      headerName: "Valor",
      width: 200,
      type: "number",
      sortable: false,
      valueFormatter: (params) =>
        parseFloat(params.value).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }),
    },
  ];
  let updatedRelatorio = (relatorio.filter(item => item.transacao_recebido == 2)).map((row, index) => {
    return { ...row, id: index };
  });
  return (
    <>
      <DataGrid
      // Traduzir para português BR
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        sx={{ background: "#fff", marginTop: 2, height: '100%' }}
        rows={updatedRelatorio}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableColumnFilter
        disableColumnMenu       
        onSelectionModelChange={(newSelection) => {
          const selectedIDs = new Set(newSelection);
          const selectedRowData = updatedRelatorio.filter((row) =>
            selectedIDs.has(row.id)
          );
          setPagar(selectedRowData)          
        }
        }
      />
     
    </>
  );
};

export default RelatorioFinanceiro;
