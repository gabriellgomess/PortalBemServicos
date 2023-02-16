import React, { useState, useContext, useEffect } from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "./UpdateCard.css";
import Amex from "../../assets/cartoes/americanexpress.png";
import Discover from "../../assets/cartoes/discover.png";
import Mastercard from "../../assets/cartoes/mastercard.png";
import Visa from "../../assets/cartoes/visa.png";
import Maestro from "../../assets/cartoes/maestro.png";
import Generico from "../../assets/cartoes/generico.png";
import AddCardIcon from "@mui/icons-material/AddCard";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

const UpdateCard = () => {
  const { dados, setDados } = useContext(ContextAPI);
  const [cardBrand, setCardBrand] = useState(null);
  const [cardBrandUpdated, setCardBrandUpdated] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCardBrand(getCardBrand(dados.vendas_cartao_num));
  }, [dados.vendas_cartao_num]);
 
useEffect(() => {
    getCardBrand(cardBrandUpdated);
    console.log(cardBrandUpdated);
}, [cardBrandUpdated]);

  const getCardBrand = (cardNumber) => {
    cardNumber = cardNumber?.replace(/\s+/g, "");

    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
      return Visa;
    } else if (
      /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
        cardNumber
      )
    ) {
      return Mastercard;
    } else if (/^3[47][0-9]{13}$/.test(cardNumber)) {
      return Amex;
    } else if (
      /^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8][0-9]|6229[01][0-9]|62292[0-5])[0-9]{10}$/.test(
        cardNumber
      )
    ) {
      return Discover;
    } else if (/^(6304|6706|6771|6709)[0-9]{12,15}$/.test(cardNumber)) {
      return Generico;
    } else if (
      /^(5018|5020|5038|5893|6304|6759|6761|6762|6763)[0-9]{8,15}$/.test(
        cardNumber
      )
    ) {
      return Maestro;
    } else if (/^5[0678]\d{11,18}$/.test(cardNumber)) {
      return Maestro;
    }

    return null;
  };

  const handleFormatCardNumber = (cardNumber) => {
    const lastFourDigits = cardNumber?.slice(-4);
    const maskedNumber = "*".repeat(cardNumber?.length - 4) + lastFourDigits;
    return maskedNumber;
  };

  const styles = {
    dialog: {
      top: '-130px'
  }
}
  return (
    <Box
      sx={{
        height: "calc(80vh - 25px)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography className="title-updatecard" variant="h5">
          Atualize seu cartão
        </Typography>
        {dados.vendas_cartao_num !== "" ? 
        <Card sx={{ display: "flex", justifyContent: 'space-between', padding: 2, marginTop: 2}}>
            <Box sx={{ display: "flex" }}>
               <img src={getCardBrand(dados.vendas_cartao_num)} alt="" />
          <Typography sx={{marginLeft: 1}} className="text-updatecard" variant="h6">
            {handleFormatCardNumber(dados.vendas_cartao_num)}
          </Typography> 
            </Box>          
          <Button
            sx={{ marginLeft: "10px" }}
            size="small"
            className="button-updatecard"
            variant="outlined"
          >
            Excluir
          </Button>
        </Card>
        : <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant='h4' sx={{color: 'grey', marginTop: '30px', textAlign: 'center'}}>Sem cartão cadastrado</Typography>
            <Typography sx={{color: '#EB8722'}} variant='p'>Vamos aproveitar e cadastrar um cartão, por favor, clique no botão <strong>ADD CARTÃO</strong>, logo abaixo.</Typography>
          </Box> }
      </Box>
      <Box
        sx={{          
          marginTop: 2,
        }}
      >        
        <Button
          sx={{ width: "100%"}}
          className="button-updatecard"
          variant="contained"
          endIcon={<AddCardIcon />}
          onClick={handleClickOpen}
        >
          Add cartão
        </Button>
      </Box>
      <Dialog PaperProps={{ style: styles.dialog }} disableScrollLock open={open} onClose={handleClose}>
        <DialogTitle>Adicionar cartão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Adicione uma nova forma de pagamento
          </DialogContentText>
          <FormControl sx={{ marginTop: 1, width: '100%'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Número do Cartão</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={'text'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                {/* <AddCardIcon /> */}
                <img src={getCardBrand()} alt="" />
                </IconButton>
              </InputAdornment>
            }
            label="Número do cartão"
            onChange={(e) => setCardBrandUpdated(e.target.value)}
          />
        </FormControl>
          <TextField autoFocus margin="dense" id="card-name" label="Nome" type="text" fullWidth variant="outlined"  />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField sx={{width: '45%'}} autoFocus margin="dense" id="card-expire" label="Validade" type="text" fullWidth variant="outlined"  />
            <TextField sx={{width: '45%'}} autoFocus margin="dense" id="card-cvv" label="CVV" type="text" fullWidth variant="outlined"  />            
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Adicionar</Button>
        </DialogActions>
      </Dialog>
      </Box>
    
  );
};

export default UpdateCard;
