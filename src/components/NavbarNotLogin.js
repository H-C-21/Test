import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom';


function ResponsiveAppbarNotLogin() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{backgroundColor: '#9F5AFF'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters> 
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            A2Z
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
           
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
              
                <MenuItem key='Home' onClick={handleCloseNavMenu}>
                 <Link to = '/' className={classes.lnk1}>Home</Link>
                </MenuItem>

                <MenuItem key='tickets' onClick={handleCloseNavMenu}>
                 <Link to = '/users' className={classes.lnk1}>Users</Link>
                </MenuItem>
             
            </Menu>
          </Box>
          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
            
            <Link to = '/'>
            <Button
                key='Home'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                <div className={classes.lnk}>Home</div>
              </Button></Link>

              <a href = 'https://fastidious-palmier-09fcf1.netlify.app'>
              <Button
                key='Users'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                <div className={classes.lnk}>Circles</div>
              </Button></a>

              
            
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppbarNotLogin;
