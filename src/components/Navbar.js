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
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import MenuButton from './MenuButton';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const dispatch = useDispatch();
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function logoutHandler(){
      dispatch(authActions.logout());
      // navigate('/')
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{backgroundColor: '#3F0096'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters> 
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              ml: 2,
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.2rem',
              fontSize: '1.5rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Fleska
          </Typography>

          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>      
            <Link to = '/' style={{textDecoration: 'none'}}>
            <Button
                key='Home'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, px: {xs:0, sm: 'auto'}, color: 'white', display: 'block' }}>
                <div className={classes.lnk}>Home</div>
              </Button></Link>

              <MenuButton/>
            
              
            
          </Box>

          <Button color="inherit" onClick={logoutHandler} sx={{fontSize: 'large'}}>Logout</Button>
        </Toolbar>
      </Container>
    </AppBar></Box>
  );
}
export default React.memo(ResponsiveAppBar);
