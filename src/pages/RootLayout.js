import { Fragment, useEffect, useRef} from "react";
import {Outlet, useNavigation} from "react-router-dom"
import ResponsiveAppBar from "../components/Navbar";
import { useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";



function RootLayout(){


    let auth = useSelector(state => state.auth.isAuthenticated);
    useEffect(()=>{
    auth = localStorage.getItem('auth') || false;
    },[])
    let navigate = useNavigation();
    
    const ref = useRef();

    useEffect(()=>{
        if(navigate.state === 'loading'){
            ref.current.continuousStart(25,2)
        }
        if(navigate.state === 'idle'){
            ref.current.complete()
        }

    },[navigate.state])

    return(
    
    <Fragment>  
        
                <LoadingBar ref={ref}
                            transitionTime={200}
                            color='#63c6c9'
                            height='5px'
                            >
                </LoadingBar>
              
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