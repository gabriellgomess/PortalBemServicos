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
import "./RelatorioFinanceiro.css";
import FormCobranca from "../FormCobranca/FormCobranca";
import collect from "collect.js";
import { ConnectingAirportsOutlined, PagesSharp } from "@mui/icons-material";

const RelatorioFinanceiro = () => {
  const { dados, setDados } = useContext(ContextAPI);
  const [relatorio, setRelatorio] = useState([]);
  const [pagar, setPagar] = useState([]);
  const [taxaBoleto, setTaxaBoleto] = useState(0);

  useEffect(() => {
    const data = {
      vendas_id: dados.vendas_id,
    }
    axios.post(
          "https://www.grupofortune.com.br/integracao/softwareexpress/atualizacao/portal/handlePortal.php?param=1", data
        )
      .then((res) => {
        if (res.status === 200) {
          let result = res.data.filter(item => item.transacao_recebido == 2)
          setRelatorio(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dados]);


  return (
    <div style={{ height: 400, width: "100%" }}>
      {relatorio ? 
      <ContextAPI.Provider value={{pagar, setPagar, taxaBoleto, setTaxaBoleto}}>        
        <DataTable relatorio={relatorio} />
        <FormCobranca cpf={dados.cliente_cpf} pagar={pagar} />       
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
    if (status == 1) {
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
  let updatedRelatorio = relatorio.map((row, index) => {
    return { ...row, id: index };
  });
  return (
    <>
    <Card
      sx={{
        width: { xs: "90%", md: "100%" },
        height: { xs: "130%", md: "180%" },
        padding: 2,
        marginTop: 3,
        background: "rgba(0, 0, 0, 0.54)",
      }}
    >
      <Typography
        sx={{ color: "#fff", display: "flex", alignItems: "center" }}
        variant="h6"
        component="div"
        gutterBottom
      >
        Relatório Financeiro <AttachMoneyIcon sx={{ color: "#fff" }} />
      </Typography>

      <DataGrid
      // Traduzir para português BR
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        sx={{ background: "#fff", height: "88%" }}
        rows={updatedRelatorio}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
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
    </Card>
    {/* {pagar?.map((row) => (
      <div key={row.id}>        
        <p>{row.id_boleto}</p>        
      </div>
    ))} */}    
      
    
    </>
  );
};

export default RelatorioFinanceiro;
