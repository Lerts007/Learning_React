import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/index";
import { AuthContext } from "./UI/context";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} exact={route.exact} key={route.path}/>
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} exact={route.exact} key={route.path}/>
      ))}
    </Routes>
  );
};

export default AppRouter;
