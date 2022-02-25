   
import React, { useContext } from "react";
import { AuthContext } from "../Context/Auth";
import { Navigate, Routes, Route, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  return user? <Outlet/>:(<Navigate to="/login"/>);

//   return (
//     <Route
//       {...rest}
//       exact
//       render={(props) =>
//         user ? <Component {...props} /> : <Navigate to="/login"/>
//       }
//     />
//   );
};

export default PrivateRoute;