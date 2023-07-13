
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import { Link} from "react-router-dom";
import { useState } from "react";
import BasicInput from "../components/BasicInput";


import classes from './Login.module.css'
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useNavigate } from "react-router-dom";

function LoginPage(){

    const [isPasswordValid,setIsPasswordValid] = useState(false)
    const [isUsernameValid,setIsUsernameValid] = useState(false)  
    const navigate = useNavigate();
    function ValidateUsername(input) {

        if (input.length > 0){
          setIsUsernameValid(true)
          return true;
        } else
           setIsUsernameValid(false);
          return false;
        }
    
    function ValidatePassword(inp){
        inp = String(inp)
        if(inp.length < 6){
            return false;
        }
        setIsPasswordValid(true);
        return true;        
    }

    const dispatch = useDispatch();
    
    function submitHandler(event){

        event.preventDefault();
      
        if(isUsernameValid && isPasswordValid){
          const data = new FormData(event.currentTarget);
          dispatch(authActions.login());
          dispatch(authActions.setUsername(data.get('Username')))
          navigate('/')
        }
        
    };
  
          return (
            <Container component="main" maxWidth="sm" sx={{minWidth: '10rem', margin: '5rem auto'}}>
            <Box
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                px: 4,
                py: 6,
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h4" sx={{paddingBottom: '1rem'}}>
                Sign in
              </Typography>

              <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1, width: '100%' }}>
                <BasicInput type = 'text' label = 'Username' err= 'Invalid Username' validation={ValidateUsername}></BasicInput>
                <BasicInput type = 'password' label = 'Password' err= 'Password must be Longer Than 6 Characters' validation={ValidatePassword}></BasicInput>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, minWidth: '3rem'}}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Link to = '/forgotpassword' variant="body2">
                      <div className={classes.forgor}>Forgot password?</div>
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
    );
}

export default LoginPage;