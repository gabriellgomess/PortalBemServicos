import React  from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Diamante from '../../assets/img/DIAMANTE.png';
import Master from '../../assets/img/MASTER.png';
import Platinum from '../../assets/img/PLATINUM.png';
import './CarouselHome.css'
import { Typography } from '@mui/material';

const CarouselHome = () => {
    
    return (
        <>
        <Typography sx={{textAlign: 'center', marginBottom: '10px', color: '#EB8722'}} variant="h5" component="h5" className="titleCarousel">
            Aumente seus Benefícios
        </Typography>
        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
            <div>
                <img src={Master} />
                <Typography sx={{textAlign: 'center', color: '#EB8722'}} variant="h5" component="h5" className="titleCarousel">
                    Master
                </Typography>
                <Typography sx={{textAlign: 'center', marginBottom: '10px', color: '#333333'}} variant="p" component="p" className="titleCarousel">
                    R$82,50
                </Typography>                
            </div>
            <div>
                <img src={Diamante} />
                <Typography sx={{textAlign: 'center', color: '#EB8722'}} variant="h5" component="h5" className="titleCarousel">
                    Platinum
                </Typography>
                <Typography sx={{textAlign: 'center', marginBottom: '10px', color: '#333333'}} variant="p" component="p" className="titleCarousel">
                    R$118,50
                </Typography>                
            </div>
            <div>
                <img src={Platinum} />
                <Typography sx={{textAlign: 'center', color: '#EB8722'}} variant="h5" component="h5" className="titleCarousel">
                    Diamante
                </Typography>
                <Typography sx={{textAlign: 'center', marginBottom: '10px', color: '#333333'}} variant="p" component="p" className="titleCarousel">
                    R$97,50
                </Typography>                
            </div>
        </Carousel>
        </>
    );
}

export default CarouselHome;