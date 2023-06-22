import React, { useState } from "react";
import Myinput from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./signin.styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DarkModeToggle from "../../components/DarkModeToggle/darkModeToggle";
import LoadingButton from "@mui/material/Button";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setErrorMessage("Preencha todos os campos");
      setError(true);
      return;
    }
    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Content>
        <C.Label>Bem vindo(a) !</C.Label>
        <C.Label>Vamos começar nossa jornada?</C.Label>
        <Myinput
          type={true}
          error={error}
          label={"Email"}
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
          errorMessage={errorMessage}
        />
        <Myinput
          label={"Senha"}
          type={false}
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <LoadingButton variant="contained" onClick={handleLogin}>
          Entrar
        </LoadingButton>
        <C.ColorButton>tex</C.ColorButton>
        <C.LabelSignup>
          Ainda não tem conta ?{" "}
          <C.Strong>
            <Link to="/signup">&nbsp; Registrar</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
      <C.ContainerHeader>
      </C.ContainerHeader>
    </C.Container>
  );
};

export default Signin;
