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
import Logo from '../../assets/Logo_rmvbg.png';
import { Link } from 'react-router-dom';



const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='AppBar' position="static">
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
              
              <Link to="/">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link to="/cliente">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Cliente</Typography>
                </MenuItem>
              </Link>
              <Link to="/financeiro">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Financeiro</Typography>
                </MenuItem>
              </Link>
              
            </Menu>
          </Box>          
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img className='img-logo' width={60} src={Logo} alt="Logo" />
          </Box>
          <Typography
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
          Bem Serviços
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link to="/cliente">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Cliente</Typography>
                </MenuItem>
              </Link>
              <Link to="/financeiro">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Financeiro</Typography>
                </MenuItem>
              </Link>
          </Box>          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;