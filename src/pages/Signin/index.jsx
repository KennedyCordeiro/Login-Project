import React, { useState } from "react";
import input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./signin.styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos");
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
      <C.Label>Kentech Login</C.Label>
      <C.Content>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar"></Button>
        <C.LabelSignup>
          Criar conta{" "}
          <C.strong>
            <Link to="/signup">&nbsp; Registrar</Link>
          </C.strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
