import React, { useState, useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AssistenciaFarmaceutica from "../../assets/icons/ASSISTENCIA_FARMACEUTICA.png";
import Telemedicina from "../../assets/icons/TELEMEDICINA.png";
import AssistenciaResidencial from "../../assets/icons/ASSISTENCIA_RESIDENCIAL.png";
import AssistenciaPet from "../../assets/icons/ASSISTENCIA_PET.png";
import OrientacaoJuridica from "../../assets/icons/ORIENTACAO_JURIDICA.png";
import CheckUp from "../../assets/icons/CHECK_UP.png";
import SorteioMensal from "../../assets/icons/SORTEIO_MENSAL.png";
import "./Beneficios.css";

const Beneficios = () => {
  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      <Card sx={{ width: '137px', height: '131px', background: '#FAD0A5', margin: '8px'}}>
        <CardActionArea sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
          <CardMedia
            component="img"
            sx={{width: '60px'}}
            image={AssistenciaFarmaceutica}
          />
          <CardContent>
            <Typography sx={{textAlign: 'center', paddingTop: '0'}} color='#F28D23' gutterBottom variant="p" component="div">
              Assistência Farmacêutica
            </Typography>            
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ width: '137px', height: '131px', background: '#FAD0A5', margin: '8px'}}>
        <CardActionArea sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
          <CardMedia
            component="img"
            sx={{width: '60px'}}
            image={Telemedicina}
          />
          <CardContent>
            <Typography sx={{textAlign: 'center', paddingTop: '0'}} color='#F28D23' gutterBottom variant="p" component="div">
              Telemedicina
            </Typography>            
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ width: '137px', height: '131px', background: '#FAD0A5', margin: '8px'}}>
        <CardActionArea sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
          <CardMedia
            component="img"
            sx={{width: '60px'}}
            image={AssistenciaResidencial}
          />
          <CardContent>
            <Typography sx={{textAlign: 'center', paddingTop: '0'}} color='#F28D23' gutterBottom variant="p" component="div">
              Assistência Residencial
            </Typography>            
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ width: '137px', height: '131px', background: '#FAD0A5', margin: '8px'}}>
        <CardActionArea sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
          <CardMedia
            component="img"
            sx={{width: '60px'}}
            image={AssistenciaPet}
          />
          <CardContent>
            <Typography sx={{textAlign: 'center', paddingTop: '0'}} color='#F28D23' gutterBottom variant="p" component="div">
              Assistência Pet
            </Typography>            
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ width: '137px', height: '131px', background: '#FAD0A5', margin: '8px'}}>
        <CardActionArea sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
          <CardMedia
            component="img"
            sx={{width: '60px'}}
            image={OrientacaoJuridica}
          />
          <CardContent>
            <Typography sx={{textAlign: 'center', paddingTop: '0'}} color='#F28D23' gutterBottom variant="p" component="div">
              Orientação Jurídica
            </Typography>            
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ width: '137px', height: '131px', background: '#FAD0A5', margin: '8px'}}>
        <CardActionArea sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
          <CardMedia
            component="img"
            sx={{width: '60px'}}
            image={CheckUp}
          />
          <CardContent>
            <Typography sx={{textAlign: 'center', paddingTop: '0'}} color='#F28D23' gutterBottom variant="p" component="div">
              Check Up Médico
            </Typography>            
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ width: '137px', height: '131px', background: '#FAD0A5', margin: '8px'}}>
        <CardActionArea sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
          <CardMedia
            component="img"
            sx={{width: '60px'}}
            image={SorteioMensal}
          />
          <CardContent>
            <Typography sx={{textAlign: 'center', paddingTop: '0', width: '102%'}} color='#F28D23' gutterBottom variant="p" component="div">
              Sorteio Mensal R$30.000
            </Typography>            
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Beneficios;
