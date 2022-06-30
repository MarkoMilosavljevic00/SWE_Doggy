import React from "react"
import { Navigate,Outlet } from "react-router-dom"
import { Alert, Button } from "@mui/material"


const ProtectedRouteLogovanTrue=({user,children,redirectPath='/'})=>
{
    if(user){
 
    // // return <Navigate to={redirectPath} replace />
    //     return <div><Alert variant="danger">
    //   <h3> Nemate prava pristupa</h3>
    //     <p>
    //         Vec ste ulogovani
    //     </p>
    //     <Button href='/'> Nazad na pocetnu</Button>
    //     </Alert>
    // </div>
    return <Navigate to={redirectPath} replace />
    }
    return <Outlet/>;
    
};
export default ProtectedRouteLogovanTrue;