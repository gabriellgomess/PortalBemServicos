import React from "react";
import DadosCliente from "../../Components/DadosCliente/DadosCliente";
import AlertaParcelas from "../../Components/AlertaParcelas/AlertaParcelas";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconBeneficios from "../../assets/icon-beneficios.png";
import IconFinanceiro from "../../assets/icon-financeiro.png";
import Elipse from '../../assets/elipse_header.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
    <img src={Elipse} alt="Header" className='elipse-header' />
      <DadosCliente />
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
            <img src={IconFinanceiro} alt="" />
            <Typography variant="h6" color="secondary" textAlign="center">
              Financeiro
            </Typography>
          </Card>
        </Link>
      </Box>
      <AlertaParcelas />
      <Card elevation={3} sx={{ maxWidth: 345, backgroundColor: '#E7334A', color: '#fff', textAlign: 'center', borderRadius: '17px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px auto'    }}>
      <CardActionArea>        
        <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Typography gutterBottom variant="h3" component="div" sx={{width: '70%', lineHeight: '38px', marginTop: 1}}>
            Faça o Upgrade
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
    <Card elevation={3} sx={{ maxWidth: 345, backgroundColor: '#F28E22', color: '#fff', textAlign: 'center', borderRadius: '17px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px auto'    }}>
      <CardActionArea>        
        <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Typography gutterBottom variant="h3" component="div" sx={{width: '70%', lineHeight: '38px', marginTop: 1}}>
            Fale Conosco
          </Typography>          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
};

export default Home;
