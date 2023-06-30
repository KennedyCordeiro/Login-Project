import React, { useState } from "react";
import Myinput from "../../components/Input";
import * as C from "./signin.styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DarkModeToggle from "../../components/DarkModeToggle/darkModeToggle";


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

  const handleButtonClick = () => {
    navigate('/signup');
  };
  
  return (
    <C.Container>
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
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />
        </C.DivInput>
        <C.SigninButton
          style={{ borderRadius: "10px 10px 10px 10px", width: "80%" }}
          variant="contained"
          onClick={handleLogin}
        >
          Entrar
        </C.SigninButton>
        <C.SignupButton onClick={handleButtonClick}>
          Cadastrar
        </C.SignupButton>

        <C.LabelSignup style={{display: 'flex', justifyContent: 'ce'}}>
          <C.Strong>
            <Link to="/signup">&nbsp; Esqueceu sua senha?</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
      <C.ContainerHeader></C.ContainerHeader>
    </C.Container>
  );
};

export default Signin;
