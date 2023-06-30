import React, { useState } from "react";
import Input from "../../components/Input";
import * as C from "./signup.styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DarkModeToggle from "../../components/DarkModeToggle/darkModeToggle";

const Signup = () => {
  const signup = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = React.useState({
    firstName: "",
    lastName: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = () => {
    if (!email | !password | !fullName) {
      setErrorMessage("Preencha todos os campos");
      setError(true);
      return;
    }

    const res = signup(fullName, email, password);

    res && navigate("/home");
  };

  const handleInputChange = (e) => {
    setFullName({
      ...fullName,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <C.Container>
      <C.ContainerHeader></C.ContainerHeader>
      <C.Content>
        <C.Label>Inscreva-se</C.Label>
        <C.DivName>
          <Input
            type={true}
            error={error}
            label={"Nome"}
            placeholder="Insira seu nome"
            value={fullName.firstName}
            onChange={handleInputChange}
            errorMessage={errorMessage}
          />
          <Input
            type={true}
            error={error}
            label={"Sobrenome"}
            placeholder="Insira seu sobrenome"
            value={fullName.lastName}
            onChange={handleInputChange}
            errorMessage={errorMessage}
          />
        </C.DivName>
        <Input
          type={true}
          error={error}
          label={"Email"}
          placeholder="Insira seu endereço de email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
          errorMessage={errorMessage}
        />
        <Input
          type={false}
          error={error}
          label={"Senha"}
          placeholder="Insira sua senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
          errorMessage={errorMessage}
        />
        <C.SignupButton>Completar cadastro</C.SignupButton>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
