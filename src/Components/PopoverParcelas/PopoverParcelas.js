import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PopoverParcelas = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleParcelas = (parcelas) => {
    let parcelasArray = parcelas.split(",");
    if (!Array.isArray(parcelasArray) || !parcelasArray.join('')) {
        return "Não há parcelas"
    }
    let count = parcelasArray.length;
    
    if (count === 1) {
        return "1 parcela"
    } else {
        return count + " parcelas"
    }
}
  const parcelasCorrespondentes = props.parcelas.split(",");

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="text" onClick={handleClick}>
        {handleParcelas(props.parcelas)}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {parcelasCorrespondentes?<Typography sx={{ p: 2 }}>Parcelas relacionadas ao boleto</Typography>:null}
        {parcelasCorrespondentes?.map((parcela) => {
            return(                
                <Typography sx={{ p: 2 }}>{parcela?"Nº "+parcela:"Não há"}</Typography>
            )
        })
        }
      </Popover>
    </div>
  );
}

export default PopoverParcelas;