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
    let count = parcelasArray.length;

    if (count === 1) {
        return "1 parcela"
    } else if(count > 1) {
        return count + " parcelas"
    }else{
        return "Não há parcelas"
    }

  }

  const parcelasCorrespondentes = props.parcelas.split(",");

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
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

        {parcelasCorrespondentes?.map((parcela) => {
            return(                
                <Typography sx={{ p: 2 }}>{parcela?parcela:"Nenhuma parcela relacionada ao boleto"}</Typography>
            )
        })
        }
      </Popover>
    </div>
  );
}

export default PopoverParcelas;