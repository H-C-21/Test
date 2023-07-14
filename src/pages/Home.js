import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from 'react-redux';

import classes from './Home.module.css'
import { Box, Container, Grid, Typography } from "@mui/material";

function HomePage(){
    
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const userName = useSelector(state => state.auth.Username)
    const [greeting, setGreeting] = useState('');
    
    useEffect(() => {
      generateGreeting();
    }, []);
  
    const generateGreeting = () => {
      const date = new Date();
      const hour = date.getHours();
      let greeting = '';
  
      if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning1';
      } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
      } else {
        greeting = 'Good Evening';
      }
  
      setGreeting(greeting);
    };
  

   
    return (  

          <Box >
            <div className={classes.bgwrap}>
              <Grid container direction='column' alignItems="center" justifyContent="center" sx={{margin: '1rem auto'}}>
                <Grid item sx={{color: 'white', paddingTop:'2.5rem'}}>
                  <div className={classes.textcontainer}>
                  <Typography sx={{
                    fontWeight: 700,
                    fontSize: {sm: '2.6rem', xs: '1.8rem'},
                    letterSpacing: '.1rem',
                    color: '#FF8C00',
                    margin: '0.4rem auto'
                  }}>
                  {`${greeting},`}
                  </Typography>
                  <Typography sx={{
                    fontWeight: 700,
                    fontSize: {sm: '2.6rem', xs: '1.8rem'},
                    letterSpacing: '.1rem',
                    color: '#FF8C00',
                    margin: '0.4rem auto'
                  }}>
                  {`${userName}`}
                  </Typography>
                  </div>
                </Grid>
                <Grid item sx={{color: 'white', paddingTop:'1rem'}}>
                  <Typography sx={{
                    fontWeight: 700,
                    fontSize: '1.4rem',
                    color: '#FF8C00'
                  }}>
                  {`How are you doing Today?`}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Box>
    );
  };
  

export default HomePage;