import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../components/UI/context";
import MyInput from "../components/UI/input/MyInput";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.PreventDefault();
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSobmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
