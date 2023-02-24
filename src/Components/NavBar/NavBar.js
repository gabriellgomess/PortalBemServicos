import React, { useState, useContext, useEffect } from "react";
import ContextAPI from "../../ContextAPI/ContextAPI";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import "./NavBar.css";
import Logo from "../../assets/logo_branco.png";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { relatorio, setRelatorio } = useContext(ContextAPI);
  const [quantidadeParcelas, setQuantidadeParcelas] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    handleAlertaParcelas();
  }, [relatorio]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

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

  const handleAlertaParcelas = () => {
    let result = relatorio.filter((item) => item.transacao_recebido == 2);
    let resultLength = result.length;
    setQuantidadeParcelas(resultLength);
  };

  return (
    <AppBar
      sx={{ backgroundColor: "#ed6435", position: "absolute", zIndex: 10 }}
      elevation={0}
      className="AppBar"
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img className="img-logo" width={80} src={Logo} alt="Logo" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              {drawerOpen?<CloseIcon />:<MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
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
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <img className="img-logo" width={100} src={Logo} alt="Logo" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/portal">
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography color='#fff' textAlign="center">Página Inicial</Typography>
              </MenuItem>
            </Link>
            <Link to="/portal/financeiro">
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography color='#fff' textAlign="center">Financeiro</Typography>
              </MenuItem>
            </Link>
            <Link to="/portal/beneficios">
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography color='#fff' textAlign="center">Seus Benefícios</Typography>
              </MenuItem>
            </Link>
            <Link to="/portal/upgrade">
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography color='#fff' textAlign="center">Faça o Upgrade</Typography>
              </MenuItem>
            </Link>
            <Link to="/portal/cliente">
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography color='#fff' textAlign="center">Seus Dados</Typography>
              </MenuItem>
            </Link>
            <Link to="/portal/fale-conosco">
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography color='#fff' textAlign="center">Fale Conosco</Typography>
              </MenuItem>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: 'center' }}>              
            <Tooltip title="Notificações">
              <Badge badgeContent={quantidadeParcelas} color="primary">
                <NotificationsIcon />
              </Badge>
            </Tooltip>
            <Tooltip sx={{display: {sx: 'none', sm: 'none', md: 'block'}}} title="Sair">
              <IconButton onClick={() => handleLogout()} sx={{ p: 1, marginLeft: 2 }}>
                <LogoutIcon  sx={{ color: '#fff !important' }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <Drawer className="menu-lateral" anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} sx={{display: 'flex', justifyContent: 'space-between', height: 'calc(100% - 70px)'}}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className="drawer"          
        >
          <List>
            {/* <Box sx={{ display: "flex", justifyContent: "end", padding: 2 }}>
              <IconButton onClick={toggleDrawer(false)} aria-label="close">
                <MenuOpenIcon sx={{ color: "#666666" }} />
              </IconButton>
            </Box> */}
            <Link to="/portal">
              <ListItem button>
                <ListItemText
                  className="listItemText"
                  style={{ color: "#F28E22" }}
                  primary="Página Inicial"
                />
              </ListItem>
            </Link>
            <Divider variant="middle" style={{ backgroundColor: "#F28E22" }} />
            <Link to="/portal/financeiro">
              <ListItem button>
                <ListItemText
                  className="listItemText"
                  style={{ color: "#F28E22" }}
                  primary="Financeiro"
                />
              </ListItem>
            </Link>
            <Divider variant="middle" style={{ backgroundColor: "#F28E22" }} />
            <Link to="/portal/beneficios">
              <ListItem button>
                <ListItemText
                  className="listItemText"
                  style={{ color: "#F28E22" }}
                  primary="Seus Benefícios"
                />
              </ListItem>
            </Link>
            <Divider variant="middle" style={{ backgroundColor: "#F28E22" }} />
            <Link to="/portal/upgrade">
              <ListItem button>
                <ListItemText
                  className="listItemText"
                  style={{ color: "#F28E22" }}
                  primary="Faça o Upgrade"
                />
              </ListItem>
            </Link>
            <Divider variant="middle" style={{ backgroundColor: "#F28E22" }} />
            <Link to="/portal/cliente">
              <ListItem button>
                <ListItemText
                  className="listItemText"
                  style={{ color: "#F28E22" }}
                  primary="Seus Dados"
                />
              </ListItem>
            </Link>
            <Divider variant="middle" style={{ backgroundColor: "#F28E22" }} />
            <Link to="/portal/fale-conosco">
              <ListItem button>
                <ListItemText
                  className="listItemText"
                  style={{ color: "#F28E22" }}
                  primary="Fale Conosco"
                />
              </ListItem>
            </Link>
            <Divider variant="middle" style={{ backgroundColor: "#F28E22" }} />            
          </List>
        </div>
        <Button sx={{marginTop: 3}} onClick={() => handleLogout()}>
        <Typography color='#707070' textAlign="center">Sair</Typography>
              <Tooltip title="Sair">
                <IconButton sx={{ p: 1, marginLeft: 2 }}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
        </Button>
      </Drawer>
    </AppBar>
  );
};
export default NavBar;
