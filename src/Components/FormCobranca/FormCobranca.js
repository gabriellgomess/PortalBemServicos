import React, { useEffect, useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import collect from 'collect.js';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import FormCard from '../FormCard/FormCard';
import FormBoleto from '../FormBoleto/FormBoleto';
import "./FormCobranca.css"
import ContextAPI from '../../ContextAPI/ContextAPI';


const FormCobranca = (props) => {
  const [open, setOpen] = useState(false);
  const [formaPagamento, setFormaPagamento] = useState('');
  const { taxaBoleto, setTaxaBoleto } = useContext(ContextAPI);
  

  const handleFormaPagamento = (event) => {
    setFormaPagamento(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const aPagar = collect(props.pagar).sum('transacao_valor')+taxaBoleto;
  return (
    <div>
        {props.pagar.length === 0?
            <Alert sx={{marginTop: 2, width: 330}} severity="info">Selecione a(as) parcela(s) que deseja pagar</Alert>
        : <Button sx={{marginTop: 3}} variant="contained" onClick={handleClickOpen}>
        Gerar Cobrança
        </Button>
        }
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Gerar Cobrança</DialogTitle>
        <DialogContent>
          <DialogContentText>            
            {(props.pagar).length>0? "Será gerada uma cobrança no valor de " + aPagar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : "Nenhum boleto foi selecionado"}
          </DialogContentText>

        <Box sx={{ minWidth: 120, marginTop: 3 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Forma de Pagamento</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formaPagamento}
            label="Forma de Pagamento"
            onChange={handleFormaPagamento}            >
            <MenuItem value={10}>Cartão de Crédito</MenuItem>
            <MenuItem value={20}>Boleto</MenuItem>
            <MenuItem disabled value={30}>Pix</MenuItem>
            </Select>
        </FormControl>
        </Box>
        {formaPagamento === 10 && <FormCard />}
        {formaPagamento === 20 && <FormBoleto valorBoleto={aPagar} cpf={props.cpf} />}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" onClick={handleClose}>Gerar</Button>
        </DialogActions>        
      </Dialog>
    </div>
  );
}

// sx={
//     {width: { 
//         xs: "100%", // 0px - 599px
//         sm: '100%', // 600px - 959px
//         md: '100%', // 960px - 1279px
//         lg: '100%', // 1280px - 1919px
//         xl: '100%'  // 1920px +
//         },               
//     }            
//     }

export default FormCobranca;