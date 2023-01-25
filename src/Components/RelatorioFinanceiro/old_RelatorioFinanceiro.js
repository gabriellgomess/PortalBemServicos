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

const RelatorioFinanceiro = () => {
  const { dados, setDados } = useContext(ContextAPI);
  const [relatorio, setRelatorio] = useState([]);
  const [pagar, setPagar] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://www.grupofortune.com.br/integracao/softwareexpress/atualizacao/portal/busca-info-financeiro.php?id=" +
          dados.vendas_id
      )
      .then((res) => {
        if (res.status === 200) {
          setRelatorio(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dados]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      {relatorio ? <ContextAPI.Provider value={{pagar, setPagar}}><DataTable relatorio={relatorio} /></ContextAPI.Provider> : "Carregando..."}
    </div>
  );
};

const DataTable = ({ relatorio }) => {
  const {pagar, setPagar} = useContext(ContextAPI);
  const handleFormatDate = (date) => {
    moment.locale("pt-br");
    return moment(date).format("DD/MM/YYYY");
  };
  const handleCheckStatus = (status) => {
    if (status === "Boleto Recebido") {
      return (
        <Typography
          sx={{ color: "#388e3c", fontWeight: "bold" }}
          variant="body2"
        >
          Pago
        </Typography>
      );
      // return "Pago";
    } else if (status === "Boleto vencido") {
      return (
        <Typography
          sx={{ color: "#d32f2f", fontWeight: "bold" }}
          variant="body2"
        >
          Vencido
        </Typography>
      );
      // return "Vencido";
    } else if (status === "Emitido o boleto") {
      return (
        <Typography
          sx={{ color: "#f57c00", fontWeight: "bold" }}
          variant="body2"
        >
          Pendente
        </Typography>
      );
      // return "Pendente";
    }
  };
  const columns = [
    { field: "transacao_id", 
      headerName: "ID Transação", 
      width: 130 
    },    
    {
      field: "id_boleto",
      headerName: "ID Boleto",
      width: 200,
      alignItems: 'center' 
    },
    
    {
      field: "parcelas_correspondentes",
      headerName: "Parcelas Correspondentes",
      width: 200,
      renderCell: (params) => <PopoverParcelas parcelas={params.value} />,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => handleCheckStatus(params.value),
    },
    {
      field: "dueDate",
      headerName: "Vencimento",
      width: 200,
      type: "date",
      alignItems: 'center',
      valueFormatter: (params) => handleFormatDate(params.value),
    },
    {
      field: "value",
      headerName: "Valor",
      width: 200,
      type: "number",
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
        height: { xs: "120%", md: "110%" },
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
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
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
    <FormCobranca pagar={pagar} />
    </>
  );
};

export default RelatorioFinanceiro;
