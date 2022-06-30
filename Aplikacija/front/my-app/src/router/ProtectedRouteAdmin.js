import React, { Children } from "react"
import { Navigate,Outlet } from "react-router-dom"
import { Alert } from "@mui/material"



const ProtectedRouteAdmin=(props)=>
{
    const {user}=props
    {console.log(user.tip)}
    if(user.tip==2){
        return <div><Alert variant="danger">
           <h3> Nemate prava pristupa</h3>
             <p>
                 Da biste pristupili ovom delu aplikacije,potrebno je da se ulogujete
            </p>
             </Alert>
         </div>
    }
  return <Navigate to={'/'} ></Navigate>
 
    
};
export default ProtectedRouteAdmin;