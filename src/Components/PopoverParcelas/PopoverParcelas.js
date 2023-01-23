import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const PopoverParcelas = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);


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

  const id = open ? 'mouse-over-popover' : undefined;

  return (
    <div>
      <Button aria-owns={id} variant="text" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} aria-haspopup="true">
        {handleParcelas(props.parcelas)}
      </Button>
      <Popover
        id={id}
        sx={{
          pointerEvents: 'none',
          cursor: 'pointer',
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        disableRestoreFocus
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