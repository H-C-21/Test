import { Grid, TextField} from "@mui/material";
import { useState,useEffect, Fragment } from "react";

import classes from './BasicInput.module.css';
function BasicInput(props){
    
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = props.validation(enteredName)
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    console.log('change')
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  useEffect(()=>{

  })
  const formSubmissionHandler = (event) => {

    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    else 
    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  let nameInputClasses = enteredNameTouched ? nameInputIsInvalid
    ? { backgroundColor: '#fddddd'}
    : {
        backgroundColor: '#ddfde2'
    } : {}

  

    return(  
        <Fragment>    
        <TextField
            margin="normal"
            required
            fullWidth
            type={props.type}
            label={props.label}
            name={props.label}
            autoComplete="email"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
            sx={nameInputClasses}
        />
      {nameInputIsInvalid && (
        <div className={classes.errorText}>{props.err}</div>
      )}</Fragment>

      )
}

export default BasicInput;