import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Myinput from "../../components/Input";
import useAuth from "../../hooks/useAuth";
import * as C from "./signin.styles";
import TestButton from "../../components/Button";
import Logo from "../../Images/logok.png";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
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
      <C.ContainerHeader>
        <C.Content>
          <C.Label>Login</C.Label>
          <C.DivInput>
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </C.DivInput>
          <TestButton text="Entrar" onClick={handleLogin}></TestButton>
          <C.LabelSignup style={{ display: "flex" }}>
            <span>Ainda não tem conta ?</span>
            <C.Strong>
              <Link to="/signup">&nbsp; Cadastre-se</Link>
            </C.Strong>
          </C.LabelSignup>
          <C.LabelSignup>
            <span>Esqueceu sua senha?</span>
            <C.Strong>
              <Link to="/forgotPassword">&nbsp; Recuperar senha</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
      </C.ContainerHeader>
    </C.Container>
  );
};

export default Signin;
