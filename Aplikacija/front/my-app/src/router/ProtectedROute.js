import React from "react"
import { Navigate,Outlet } from "react-router-dom"
import { Alert } from "@mui/material"


const ProtectedRoute=({isAllowed,children,redirectPath='/'})=>
{
    if(!isAllowed){
    // return <div><Alert variant="danger">
    //   <h3> Nemate prava pristupa</h3>
    //     <p>
    //         Da biste pristupili ovom delu aplikacije,potrebno je da se ulogujete
    //     </p>
    //     </Alert>
    // </div>
    // return <Navigate to={redirectPath} replace />
    // }
    // return children? children:<Outlet/>;
    }
};
export default ProtectedRoute;