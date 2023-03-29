import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "../pages/Start";
import Error from "../pages/Error";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map( route =>
        <Route path = {route.path} component = {route.component} exact={route.exact}/>
        )
      }
      <Route path="/" element = {<Start/>} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
