import { Fragment, useEffect} from "react";
import {Outlet} from "react-router-dom"
import ResponsiveAppBar from "../components/Navbar";
import { useSelector } from "react-redux";



function RootLayout(){


    let auth = useSelector(state => state.auth.isAuthenticated);
    useEffect(()=>{
    auth = localStorage.getItem('auth') || false;
    },[])

    return(
    
    <Fragment>   
        <nav>
           {auth && <ResponsiveAppBar/>} 
        </nav>      
        <main >
            <Outlet/>
        </main>
    </Fragment> 
    
    )
}

export default RootLayout