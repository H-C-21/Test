import { Fragment } from "react";

import { Box, Button, Checkbox, Container, Dialog, DialogTitle, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import { Link} from "react-router-dom";
import { useState } from "react";
import BasicInput from "../components/BasicInput";

function ForgotPasswordPage(){

    const [isValid, setIsValid] = useState(false)
    const [open, setIsOpen] = useState(false)
    function ValidateEmail(mail){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){ 
            
            setIsValid(true)
            return (true)
          }
            setIsValid(false)
            return (false);
    }

    function submitHandler(event){
        event.preventDefault();
        if(isValid){
            setIsOpen(true)
        }
    }

    function closeHandler(){
        setIsOpen(false)
    }

    return(
        <Fragment>
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
                Forgot Password?
              </Typography>

              <Box component="form" noValidate sx={{ mt: 1, width: '100%' }} onSubmit={submitHandler}>
                <BasicInput type = 'text' label = 'Enter your Email' err= 'Invalid Email' validation={ValidateEmail}></BasicInput>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, minWidth: '3rem'}}
                >
                  Submit Handler
                </Button>
              </Box>

            </Box>
          </Container>

        <Dialog
        onClose={closeHandler}
        open={open}
        aria-labelledby="alert-dialog-title"
        >
        <DialogTitle id="alert-dialog-title" sx={{padding: '2rem', color: '#4caf50'}}>
         We have sent a link to your mail.
        </DialogTitle> 
        <Button onClick={closeHandler} sx={{padding: '0px 8px'}}>Close</Button>
         </Dialog>
        </Fragment>
    )
}

export default ForgotPasswordPage;