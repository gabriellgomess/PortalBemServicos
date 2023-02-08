import React, { useState, useContext, useEffect } from "react";
import DadosCliente from "../../Components/DadosCliente/DadosCliente";
import AlertaParcelas from "../../Components/AlertaParcelas/AlertaParcelas";
import ContextAPI from "../../ContextAPI/ContextAPI";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import Telefone from "../../assets/icons/svg/0800.svg";
import Email from "../../assets/icons/svg/EMAIL.svg";
import Whatsapp from "../../assets/icons/svg/WHATSAPP.svg";

const Home = () => {
  // state para abrir o modal (dialog)
  const [open, setOpen] = useState(false);
  // state relatorio onde verifica se tem parcela não paga
  const { relatorio, setRelatorio } = useContext(ContextAPI);
  // state responsável por abrir o alerta apenas na primeira vez que o usuário entrar na home
  const { openAlert, setOpenAlert } = useContext(ContextAPI);

  // função para abrir o modal e setar que o mesmo já foi aberto
  const handleClickOpen = () => {
    setOpen(true);
    setOpenAlert(false);
  };
  // função para fechar o modal e setar que o mesmo já foi aberto
  const handleClose = () => {
    setOpen(false);
    setOpenAlert(false);
  };
  // função para filtrar o relatório e verificar se tem parcela não paga e também verifica se o alerta já foi aberto
  useEffect(() => {
    const result = relatorio.filter((item) => item.transacao_recebido == 2);
    if (result.length > 0 && openAlert == true) {
      handleClickOpen();
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
        <Link to="/portal/beneficios" className="link_alert">
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
              color="#EB8722"
              textAlign="center"
            >
              Seus Benefícios
            </Typography>
          </Card>
        </Link>
        <Link to="/portal/financeiro">
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
            <Typography variant="h6" color="#EB8722" textAlign="center">
              Financeiro
            </Typography>
          </Card>
        </Link>
      </Box>
      {/* Componente que mostra um alerta fixo na tela dizendo se tem parcelas não pagas e a quantidade ou se está tudo em dia */}
      <AlertaParcelas />

      <Box sx={{ marginTop: 3 }}>
        <CarouselHome />
      </Box>
      <Box>
        <Typography sx={{ textAlign: "center", color: "#EB8722" }} variant="h5">
          Fale Conosco
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", marginTop: 2 }}
        >
          <Card sx={{ width: '70px', height: '70px' }}>
            <CardActionArea>
              <CardMedia sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px'}}>
                <svg
                  id="Camada_2"
                  data-name="Camada 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 42.86 39.27"
                  width={30}
                >
                  <defs>
                    <style>
                      {
                        "\n      .cls-1 {\n        fill: none;\n        stroke: #666;\n        stroke-miterlimit: 10;\n        stroke-width: .83px;\n      }\n    "
                      }
                    </style>
                  </defs>
                  <g id="Camada_1-2" data-name="Camada 1">
                    <path
                      className="cls-1"
                      d="m12.46,16.49c1.14,1.77,2.8,3.97,5.16,6.14,3.06,2.82,6.13,4.52,8.36,5.53.73-1.43,2.57-4.61,5.28-4.79,1.02-.07,1.44.33,4.63,1.94,5.05,2.54,5.83,2.47,6.31,3.59,1.16,2.72-2.06,6.32-2.46,6.76-2.04,2.24-4.55,2.95-5.65,3.19-2.6-.08-15.69-.76-25.31-11.43C2.73,20.74.99,13.38.41,9.98c.01-1.02.18-4.07,2.46-6.51C5.18,1,9.32-.48,11.47,1.01c.75.52.65.99,1.97,4.3,1.77,4.45,2.5,4.98,2.33,6.51-.09.85-.54,2.7-3.32,4.67Z"
                    />
                  </g>
                </svg>
              </CardMedia>
              <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                <Typography gutterBottom variant="p" component="p" sx={{color: '#EB8722'}}>
                  0800
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: '70px', height: '70px' }}>
            <CardActionArea>
              <CardMedia sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px'}}>
                <svg
                  id="Camada_2"
                  data-name="Camada 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 39.84 39.94"
                  width={30}
                >
                  <defs>
                    <style>
                      {
                        "\n      .cls-1 {\n        fill: none;\n        stroke: #666;\n        stroke-miterlimit: 10;\n        stroke-width: .83px;\n      }\n    "
                      }
                    </style>
                  </defs>
                  <g id="Camada_1-2" data-name="Camada 1">
                    <g>
                      <path
                        className="cls-1"
                        d="m6.32,33.26l2.02-5.13c-.38-.49-4.91-6.52-2.49-13.82,2.59-7.79,10.64-9.64,11.34-9.79.79-.17,8.22-1.6,13.82,3.88,5.81,5.67,4.26,13.48,4.14,14-1.21,5.57-5.57,10.28-11.3,11.57-6.2,1.4-11.09-1.84-11.95-2.43-1.86.57-3.73,1.14-5.59,1.71Z"
                      />
                      <path
                        className="cls-1"
                        d="m.64,39.32c1.15-3.46,2.3-6.92,3.44-10.37-.61-.99-4.67-7.79-2.03-15.8C5.3,3.3,15.59.95,16.38.78c.99-.21,10.38-2.02,17.47,4.91,7.34,7.17,5.38,17.03,5.24,17.69-1.55,7.14-7.17,13.01-14.28,14.62-6.32,1.43-11.5-1.04-13.09-1.87-3.69,1.07-7.38,2.13-11.07,3.2Z"
                      />
                      <path
                        className="cls-1"
                        d="m16.63,17.79c.54.84,1.33,1.88,2.45,2.91,1.45,1.34,2.91,2.14,3.96,2.62.34-.68,1.22-2.19,2.5-2.27.48-.03.68.16,2.19.92,2.39,1.21,2.76,1.17,2.99,1.7.55,1.29-.97,2.99-1.16,3.2-.97,1.06-2.16,1.4-2.68,1.51-1.23-.04-7.44-.36-12-5.42-2.86-3.17-3.69-6.66-3.96-8.27,0-.48.08-1.93,1.16-3.09,1.1-1.17,3.06-1.87,4.08-1.16.36.25.31.47.93,2.04.84,2.11,1.19,2.36,1.11,3.09-.04.4-.26,1.28-1.57,2.21Z"
                      />
                    </g>
                  </g>
                </svg>
              </CardMedia>
              <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                <Typography gutterBottom variant="p" component="p" sx={{color: '#EB8722'}}>
                  WhatsApp
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: '70px', height: '70px' }}>
            <CardActionArea>
              <CardMedia sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px'}}>
                <svg
                  id="Camada_2"
                  data-name="Camada 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 46.38 32.19"
                  width={30}
                >
                  <defs>
                    <style>
                      {
                        "\n      .cls-1 {\n        fill: none;\n        stroke: #666;\n        stroke-miterlimit: 10;\n        stroke-width: .83px;\n      }\n    "
                      }
                    </style>
                  </defs>
                  <g id="Camada_1-2" data-name="Camada 1">
                    <g>
                      <rect
                        className="cls-1"
                        x={0.41}
                        y={0.41}
                        width={45.55}
                        height={31.36}
                      />
                      <polyline
                        className="cls-1"
                        points="45.97 .48 23.19 19.96 .41 .48"
                      />
                      <line
                        className="cls-1"
                        x1={18.97}
                        y1={16.32}
                        x2={0.41}
                        y2={31.82}
                      />
                      <line
                        className="cls-1"
                        x1={27.41}
                        y1={16.32}
                        x2={45.97}
                        y2={31.82}
                      />
                    </g>
                  </g>
                </svg>
              </CardMedia>
              <CardContent sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                <Typography gutterBottom variant="p" component="p" sx={{color: '#EB8722'}}>
                  E-mail
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>

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
