import React, { useState, useContext, useEffect } from "react";
import DadosCliente from "../../Components/DadosCliente/DadosCliente";
import AlertaParcelas from "../../Components/AlertaParcelas/AlertaParcelas";
import ContextAPI from "../../ContextAPI/ContextAPI";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconBeneficios from "../../assets/icon-beneficios.png";
import IconFinanceiro from "../../assets/icon-financeiro.png";
import Elipse from "../../assets/elipse_header.png";
import "./Home.css";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const Home = () => {
  // state para abrir o modal (dialog)
  const [open, setOpen] = useState(false);
  // state relatorio onde verifica se tem parcela não paga
  const { relatorio, setRelatorio } = useContext(ContextAPI);
  // state responsável por abrir o alerta apenas na primeira vez que o usuário entrar na home
  const { openAlert, setOpenAlert } = useContext(ContextAPI);

  // função para abrir o modal
  const handleClickOpen = () => {
    setOpen(true);
  };
  // função para fechar o modal
  const handleClose = () => {
    setOpen(false);
  };
  // função para filtrar o relatório e verificar se tem parcela não paga e também verifica se o alerta já foi aberto
  useEffect(() => {
    const result = relatorio.filter((item) => item.transacao_recebido == 2);
    if (result.length > 0 && openAlert == true) {
      handleClickOpen();
      setOpenAlert(false);
    }
  }, [relatorio]);

  return (
    <div className="home">
      <img src={Elipse} alt="Header" className="elipse-header" />
      {/* Componente que trás o nome, a apólice e o plano do cliente */}
      <DadosCliente />
      {/* Box que contém os 2 cards 'Seus Benefícios' e 'Financeiro' */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          maxWidth: "380px",
          margin: "0 auto",
        }}
      >
        <Link to="" className="link_alert">
          <Card
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: 1,
              padding: 2,
              color: "grey",
              backgroundColor: "#fff",
              width: "109px",
              height: "109px",
              borderRadius: "10px",
            }}
          >
            <img src={IconBeneficios} alt="" />
            <Typography
              sx={{ lineHeight: "18px" }}
              variant="h6"
              color="secondary"
              textAlign="center"
            >
              Seus Benefícios
            </Typography>
          </Card>
        </Link>
        <Link to="/portal/financeiro" className="link_alert">
          <Card
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: 1,
              padding: 2,
              color: "grey",
              backgroundColor: "#fff",
              width: "109px",
              height: "109px",
              borderRadius: "10px",
            }}
          >
            <img src={IconFinanceiro} alt="" />
            <Typography variant="h6" color="secondary" textAlign="center">
              Financeiro
            </Typography>
          </Card>
        </Link>
      </Box>
      {/* Componente que mostra um alerta fixo na tela dizendo se tem parcelas não pagas e a quantidade ou se está tudo em dia */}
      <AlertaParcelas />
      {/* Componente que abriga os cards 'Faça o Upgrade' e 'Fale Conosco' */}
      <Card
        elevation={3}
        sx={{
          maxWidth: 345,
          backgroundColor: "#E7334A",
          color: "#fff",
          textAlign: "center",
          borderRadius: "17px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px auto",
        }}
      >
        <CardActionArea>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{ width: "70%", lineHeight: "38px", marginTop: 1 }}
            >
              Faça o Upgrade
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        elevation={3}
        sx={{
          maxWidth: 345,
          backgroundColor: "#F28E22",
          color: "#fff",
          textAlign: "center",
          borderRadius: "17px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px auto",
        }}
      >
        <CardActionArea>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{ width: "70%", lineHeight: "38px", marginTop: 1 }}
            >
              Fale Conosco
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* Componente Dialog (Modal) que será aberto no primeiro render da Home, caso haja parcelas em aberto */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#FFC4BF",
            color: "#fff",
            borderRadius: "24px",
          },
        }}
      >
        <DialogContent>
          <WarningAmberIcon
            sx={{
              fontSize: 100,
              color: "#E7334A",
              margin: "0 auto",
              display: "block",
            }}
          />
          <DialogContentText id="alert-dialog-description">
            Você tem pendências a resolver, clique para ver e fique com seu
            plano em dia.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
          <Link to="/portal/financeiro">
            <Button onClick={handleClose} autoFocus>
              Ver
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
