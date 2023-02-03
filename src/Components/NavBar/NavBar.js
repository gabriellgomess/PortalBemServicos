import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './NavBar.css';
import Logo from '../../assets/logo_branco.png';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';



const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("dados");
    window.location.href = "/portal";
  };

  return (
    <AppBar sx={{backgroundColor: '#ee6d30', position: 'fixed', zIndex: 10}} elevation={0} className='AppBar' position="static">      
      <Container maxWidth="xl">
        <Toolbar disableGutters>        
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img className='img-logo' width={80} src={Logo} alt="Logo" />
          </Box>          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
              <Link to="/portal">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link to="/portal/cliente">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Cliente</Typography>
                </MenuItem>
              </Link>
              <Link to="/portal/financeiro">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Financeiro</Typography>
                </MenuItem>
              </Link>
              {/* <Link to="/portal/cartao">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Cartão</Typography>
                </MenuItem>
              </Link> */}
              
            </Menu>
          </Box>          
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width: '100%', justifyContent: 'center'}}>
            <img className='img-logo' width={100} src={Logo} alt="Logo" />
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          APOBEM
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/portal">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link to="/portal/cliente">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Cliente</Typography>
                </MenuItem>
              </Link>
              <Link to="/portal/financeiro">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Financeiro</Typography>
                </MenuItem>
              </Link>
              {/* <Link to="/portal/cartao">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Cartão</Typography>
                </MenuItem>
              </Link> */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Sair">
              <IconButton onClick={()=>handleLogout()} sx={{ p: 0 }}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>            
              </Box>   
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;