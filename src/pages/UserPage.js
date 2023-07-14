import { Container,Grid} from "@mui/material";
import { Fragment, useEffect } from "react";

import classes from './UserPage.module.css';
import { useLoaderData, useLocation } from "react-router";
import UserCard from "../components/UserCard";

function UserPage(){

    let user = useLoaderData();
   
    useEffect(()=>{
        async function loader(){
            let data = await fetch('https://random-data-api.com/api/v2/users')
            let udata = await data.json();
            return udata;
        }

        if(user === null){
            user = loader();    
        }
    },[])

    return(
        <Fragment>
                <Container className={classes.maincont}>
                    <Grid container spacing={4} columnSpacing={4} justifyContent='space-around' sx={{padding: '1rem 1rem !important', marginTop:'2rem'}}>
                 
                    <Grid item lg={4} sm={4} xs={12} sx={{paddingRight: '1rem',  marginLeft: 'auto', marginRight: 'auto'}}>
                            <div className={classes.profimg}>
                             <UserCard user = {user} />  
                            </div>

                            <div className={classes.minor}>
                            <Grid container spacing={3} direction={'column'}>
                            <Grid item sx={{maxHeight: '55px'}}>
                            <Grid container spacing={5} sx={{maxHeight: '55px'}}>
                                    <Grid item xs={4}><div className={classes.index1}>ID</div></Grid> 
                                    <Grid item xs ={8}><div>{user.id}</div></Grid>
                                </Grid>
                                <hr></hr>
                            </Grid>
                    
                            <Grid item sx={{maxHeight: '55px'}}>
                            <Grid container spacing={5} sx={{maxHeight: '55px'}}>
                                    <Grid item xs={4}><div className={classes.index1}>Plan</div></Grid> 
                                    <Grid item xs ={8}><div>{user.subscription.plan}</div></Grid>
                                </Grid>
                                <hr></hr>
                            </Grid>
                            <Grid item sx={{maxHeight: '55px'}}>
                            <Grid container spacing={5} sx={{maxHeight: '55px'}}>
                                    <Grid item xs={4}><div className={classes.index1}>Status</div></Grid> 
                                    <Grid item xs ={8}><div>{user.subscription.status}</div></Grid>
                                </Grid>
                               
                            </Grid>

                            </Grid>
                        </div>

                    </Grid>

                    <Grid item lg={8} sm={7} xs={12} paddingRight={'1rem'} >
                        <div className={classes.info}>
                            <Grid container spacing={4} direction={'column'}>
                            
                                <Grid item sx={{maxHeight: '55px'}}>
                                <Grid container spacing={5} sx={{maxHeight: '55px'}}>
                                        <Grid item xs={4}><div className={classes.index1}>Full_Name</div></Grid> 
                                        <Grid item xs ={8}><div>{user.first_name+' '+user.last_name}</div></Grid>
                                    </Grid>
                                    <hr></hr>
                                </Grid>
                                <Grid item sx={{maxHeight: '55px'}}>
                                <Grid container spacing={5}>
                                        <Grid item xs={4}><div className={classes.index1}>Email</div></Grid> 
                                        <Grid item xs ={8} className={classes.address}><div>{user.email}</div></Grid>
                                    </Grid>
                                    <hr></hr>
                                </Grid>
                                <Grid item sx={{maxHeight: '55px'}}>
                                <Grid container spacing={5}>
                                        <Grid item xs={4} ><div className={classes.index1}>Phone</div></Grid> 
                                        <Grid item xs ={8} ><div className={classes.address}>{user.phone_number.replace(/\s+/g, '')}</div></Grid>
                                    </Grid>
                                    <hr></hr>
                                </Grid>
                                <Grid item sx={{maxHeight: '55px'}}>
                                <Grid container spacing={5}>
                                        <Grid item xs={4} ><div className={classes.index1}>Gender</div></Grid> 
                                        <Grid item xs ={8} ><div>{user.gender}</div></Grid>
                                    </Grid>
                                    <hr></hr>
                                </Grid>
                                <Grid item sx={{maxHeight: '55px'}}>
                            <Grid container spacing={5} sx={{maxHeight: '55px'}}>
                                    <Grid item xs={4}><div className={classes.index1}>Dob</div></Grid> 
                                    <Grid item xs ={8}><div>{user.date_of_birth}</div></Grid>
                                </Grid>
                                <hr></hr>
                            </Grid>
                                <Grid item  sx={{maxHeight: '55px'}}>
                                <Grid container spacing={6}>
                                        <Grid item xs={4} ><div className={classes.index1}>Address</div></Grid> 
                                        <Grid item xs ={8} className={classes.address}><div className={classes.address}>{user.address.street_address+','+user.address.street_name}</div></Grid>
                                    </Grid>
                                    <hr></hr>
                                </Grid>
                                <Grid item sx={{maxHeight: '55px'}}>
                                <Grid container spacing={6}>
                                        <Grid item xs={4}><div className={classes.index1}>State</div></Grid> 
                                        <Grid item xs ={8}><div>{user.address.state}</div></Grid>
                                    </Grid>
                                    <hr></hr>
                                </Grid>
                                <Grid item  sx={{maxHeight: '55px'}}>
                                <Grid container spacing={6}>
                                        <Grid item xs={4}><div className={classes.index1}>Country</div></Grid> 
                                        <Grid item xs ={8} ><div>{user.address.country}</div></Grid>
                                    </Grid>
                                    
                                </Grid>

                            </Grid>
                        </div>
                    </Grid>

                </Grid>
                </Container>
        </Fragment>
    )
}

export default UserPage;

export async function loader(){

        let data = await fetch('https://random-data-api.com/api/v2/users')
        let udata = await data.json();
        return udata;

}