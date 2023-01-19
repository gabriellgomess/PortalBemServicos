import react from 'react';
import Banner from '../../assets/Logo_rmvbg.png';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import './NoPage.css';


const NoPage = () => {
    return (
        <div className='no-page-container'>
            <img src={Banner} alt="Banner" width={250} />
            <Divider sx={{margin: '20px 0'}} />
            <Typography variant="h4" gutterBottom>Para acessar essa área, você deverá usar o link que recebeu por um dos nossos canais de relacionamento</Typography>
            <Typography sx={{color: 'lightgray', fontWeight: 'bold'}} variant="h3" gutterBottom>404 - Página não encontrada</Typography>
        </div>
    );
}

export default NoPage;