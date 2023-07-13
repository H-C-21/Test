import { useState } from "react";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Button, Container, Dialog, DialogTitle, InputAdornment, MenuItem } from "@mui/material";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider, TimePicker} from '@mui/x-date-pickers'
import dayjs from "dayjs";
import { useNavigate } from "react-router";


let curr = dayjs()

function NewTicketPage(){


    const [isEmailValid,setIsEmailValid] = useState(true);
    const [isNumberValid,setIsNumberValid] = useState(true);
    const [currentTime,setCurrentTime] = useState(curr);
    const [open,setOpen] = useState(false)
    const navigate = useNavigate();

    const mode = [
        {
          value: 'Call',
          label: 'Call',
        },
        {
          value: 'Chat',
          label: 'Chat',
        },
        {
            value: 'Web',
            label: 'Web',
        }
      ];

      function ValidateRegistration(num){

      if (/^[A-Z]+$/.test(num)){
          setIsNumberValid(true)
          return (true)
        }
          setIsNumberValid(false)
          return (false)
      }

      function ValidateEmail(mail){
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
              setIsEmailValid(true)
              return (true)
            }
            setIsEmailValid(false)
              return (false)
          }

    function submitHandler(event){
      event.preventDefault();
      setOpen(true)
      if(isEmailValid && isNumberValid){
        
      }
    }

    function closeHandler(event){
      setOpen(false);
      if(isEmailValid && isNumberValid){
        navigate('/') 
      }
      return false;
    }

    return(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container sx={{mt: '1rem', padding: '1rem 3rem'}}>
        <Box sx={{padding: '2rem 4rem', border: '1px solid black', backgroundColor: 'white'}}>
            <Typography variant="h4" gutterBottom sx={{paddingBottom:'18px'}}>
                Ticket Form
            </Typography>

        <form onSubmit={submitHandler}>    
        <Grid container spacing={4}>
            
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contact1"
            name="contactno"
            label="Contact Number"
            fullWidth
            autoComplete="Number"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            error={!isEmailValid}
            required
            id="contact2"
            name="email"
            label="Email Address"
            fullWidth
            helperText={!isEmailValid && "Please Enter a Valid Email"}
            onChange={e => ValidateEmail(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
            <TextField
             id="lead"
             select
             label="Select"
             defaultValue="Web"
             fullWidth
            >
            {mode.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="registration"
            name="registration"
            label="Vehicle Registration Number"
            fullWidth
            helperText="All in Captials with No Spaces"
            onChange={e=> ValidateRegistration(e.target.value)}
            error={!isNumberValid}
          />

        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="vehicle"
            name="vehicle"
            label="Vehicle Make"
            fullWidth
          />
        </Grid>
       
        <Grid item xs={12}>
          <TextField
          required
            id="issue"
            name="issue"
            label="Breakdown Issue"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="location"
            name="location"
            label="Location"
            fullWidth
          />
        </Grid>
      
        <Grid item xs={12} sm={6}>
        
          <TimePicker
            sx={{width:'100%'}}
            value={currentTime}
            views={['hours', 'minutes']}
            label="Assistance time" 
          />
          

        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            id="fee"
            name="fee"
            label="Service Fee"
            fullWidth 
            InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="comments"
            name="comments"
            label="Comments"
            fullWidth
            multiline
            minRows={6}
          />
        </Grid>

        <Grid item xs={12} sx={{display: 'flex', justifyContent: "flex-end"}}>
        <Button color="secondary" type="submit" variant="contained" sx={{height:'3.4rem', width: '8rem', margin: '10px'}}>Submit</Button>
        </Grid>
        </Grid>
      </form>
              
        </Box>
      
        
      </Container>

       
      <Dialog
        onClose={closeHandler}
        open={open}
        aria-labelledby="alert-dialog-title"
      >
       {isEmailValid && isNumberValid && <DialogTitle id="alert-dialog-title" sx={{padding: '2rem', color: '#4caf50'}}>
         Task Created Successfully, Click To go Back!
        </DialogTitle> }
      
        {(!isEmailValid || !isNumberValid) && <DialogTitle id="alert-dialog-title" sx={{padding: '2rem', color: '#f44336'}}>
         'Please Fill All Fields'
        </DialogTitle> }

        <Button onClick={closeHandler} sx={{padding: '0px 8px'}}>Close</Button>
         </Dialog>
    </LocalizationProvider>
    )
}

export default NewTicketPage;