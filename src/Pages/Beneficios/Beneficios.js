import React, { useState, useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { CardActionArea } from "@mui/material";
import AssistenciaFarmaceutica from "../../assets/icons/ASSISTENCIA_FARMACEUTICA.png";
import Telemedicina from "../../assets/icons/TELEMEDICINA.png";
import AssistenciaResidencial from "../../assets/icons/ASSISTENCIA_RESIDENCIAL.png";
import AssistenciaPet from "../../assets/icons/ASSISTENCIA_PET.png";
import OrientacaoJuridica from "../../assets/icons/ORIENTACAO_JURIDICA.png";
import CheckUp from "../../assets/icons/CHECK_UP.png";
import SorteioMensal from "../../assets/icons/SORTEIO_MENSAL.png";
import CartaoAlimentacao from "../../assets/icons/ALIMENTACAO.png";
import SeguroMorteAcidental from "../../assets/icons/SEGURO_MORTE_ACIDENTAL.png";
import AssistenciaFuneral from "../../assets/icons/ASSIST_FUNERAL.png";
import { useNavigate } from "react-router-dom";
import "./Beneficios.css";

const Beneficios = () => {
  const history = useNavigate();

  const handleVoltar = () => {
    history(-1);
  };
  return (
    <Box>
      <Button
        className="button-updatecard"
        variant="text"
        startIcon={<ArrowBackIosNewIcon />}
        onClick={handleVoltar}
        sx={{ color: "#808080", marginBottom: 0, padding: 0 }}
      >
        Voltar
      </Button>
      <Typography className="title-beneficios" variant="h5">
        Seus Benefícios
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: {sx: '100%', sm: '100%', md: '50%'}, margin: '30px auto' }}>
        <Card
          sx={{
            width: "137px",
            height: "131px",
            background: "#EB8722",
            margin: "8px",
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "60px" }}
              image={AssistenciaFarmaceutica}
            />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", paddingTop: "0" }}
                color="#fff"
                gutterBottom
                variant="p"
                component="div"
              >
                Assistência Farmacêutica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: "137px",
            height: "131px",
            background: "#EB8722",
            margin: "8px",
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "60px" }}
              image={Telemedicina}
            />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", paddingTop: "0" }}
                color="#fff"
                gutterBottom
                variant="p"
                component="div"
              >
                Telemedicina
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: "137px",
            height: "131px",
            background: "#EB8722",
            margin: "8px",
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "60px" }}
              image={AssistenciaResidencial}
            />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", paddingTop: "0" }}
                color="#fff"
                gutterBottom
                variant="p"
                component="div"
              >
                Assistência Residencial
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: "137px",
            height: "131px",
            background: "#EB8722",
            margin: "8px",
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "60px" }}
              image={AssistenciaPet}
            />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", paddingTop: "0" }}
                color="#fff"
                gutterBottom
                variant="p"
                component="div"
              >
                Assistência Pet
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: "137px",
            height: "131px",
            background: "#EB8722",
            margin: "8px",
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "60px" }}
              image={OrientacaoJuridica}
            />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", paddingTop: "0" }}
                color="#fff"
                gutterBottom
                variant="p"
                component="div"
              >
                Orientação Jurídica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: "137px",
            height: "131px",
            background: "#EB8722",
            margin: "8px",
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CardMedia component="img" sx={{ width: "60px" }} image={CheckUp} />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", paddingTop: "0" }}
                color="#fff"
                gutterBottom
                variant="p"
                component="div"
              >
                Check Up Médico
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: "137px",
            height: "131px",
            background: "#EB8722",
            margin: "8px",
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "60px" }}
              image={SorteioMensal}
            />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", paddingTop: "0", width: "102%" }}
                color="#fff"
                gutterBottom
                variant="p"
                component="div"
              >
                Sorteio Mensal
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: "137px",
            height: "131px",
            background: "#EB8722",
            margin: "8px",
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "60px" }}
              image={CartaoAlimentacao}
            />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", paddingTop: "0", width: "102%" }}
                color="#fff"
                gutterBottom
                variant="p"
                component="div"
              >
                Cartao Alimentação
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: "137px",
            height: "131px",
            background: "#EB8722",
            margin: "8px",
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "60px" }}
              image={SeguroMorteAcidental}
            />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", paddingTop: "0", width: "102%" }}
                color="#fff"
                gutterBottom
                variant="p"
                component="div"
              >
                Seguro Morte Acidental
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: "137px",
            height: "131px",
            background: "#EB8722",
            margin: "8px",
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "60px" }}
              image={AssistenciaFuneral}
            />
            <CardContent>
              <Typography
                sx={{ textAlign: "center", paddingTop: "0", width: "102%" }}
                color="#fff"
                gutterBottom
                variant="p"
                component="div"
              >
                Assistência Funeral
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default Beneficios;
