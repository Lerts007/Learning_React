import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Start from "../pages/Start";
import Error from "../pages/Error";
import { privateRoutes, publicRoutes } from "../router/index";
import { AuthContext } from "./UI/context";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} exact={route.exact} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} exact={route.exact} />
      ))}
    </Routes>
  );
};

export default AppRouter;
