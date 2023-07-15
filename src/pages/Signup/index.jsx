import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestButton from "../../components/Button";
import Input from "../../components/Input";
import useAuth from "../../hooks/useAuth";
import * as C from "./signup.styles";

const Signup = () => {
  const makeSignup = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = React.useState({
    firstName: "",
    lastName: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const validateForm = () => {
    setErrorMessage([]);
    const emailRegex = /^.+@.+\..+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    if (!isPasswordValid) {
      setErrorMessage((prevErrors) => [
        ...prevErrors,
        "A senha deve conter mais de 8 digitos",
      ]);
      setErrorMessage((prevErrors) => [
        ...prevErrors,
        "A senha deve conter letras maiusculas e números",
      ]);
    }

    if (!isEmailValid) {
      setErrorMessage((prevErrors) => [
        ...prevErrors,
        "Formato de email incorreto",
      ]);
    }

    if (
      !fullName.firstName.length > 0 ||
      !fullName.lastName.length > 0 ||
      !email.length > 2 ||
      !password.length > 8
    ) {
      setErrorMessage((prevErrors) => [
        ...prevErrors,
        "Preencha todos os campos",
      ]);
    }

    if (password !== confirmPassword) {
      setErrorMessage((prevErrors) => [
        ...prevErrors,
        "As senhas não conferem",
      ]);
    }

    return !isEmailValid || !isPasswordValid;
  };

  const handleSignup = () => {
    if (validateForm()) {
      setError(true);
      return;
    }

    const res = makeSignup(fullName, email, password);

    res && navigate("/home");
  };

  const handleSignin = () => {
    navigate("/signin");
  };

  return (
    <C.Container>
      <C.ContainerHeader>
        <C.Content>
          <C.Label>Inscreva-se</C.Label>
          <C.DivName>
            <Input
              type={true}
              error={error}
              label={"Nome"}
              placeholder="Insira seu nome"
              value={fullName.firstName}
              onChange={(e) =>
                setFullName({ ...fullName, firstName: e.target.value })
              }
            />
            <Input
              type={true}
              error={error}
              label={"Sobrenome"}
              placeholder="Insira seu sobrenome"
              value={fullName.lastName}
              onChange={(e) =>
                setFullName({ ...fullName, lastName: e.target.value })
              }
            />
          </C.DivName>
          <Input
            type={true}
            error={error}
            label={"Email"}
            placeholder="Insira seu endereço de email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type={false}
            error={error}
            label={"Senha"}
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type={false}
            error={error}
            label={"Confirmar senha"}
            placeholder="Insira novamente sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <C.labelError>
            {errorMessage.length > 0 && (
              <ul>
                {errorMessage.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
          </C.labelError>
          <TestButton onClick={handleSignup} Text={"Cadastrar"}></TestButton>
          <C.TextContainer>
            <C.Strong>Já possui conta?</C.Strong>
            <div>
              {" "}
              <C.LoginButton onClick={handleSignin}>Login</C.LoginButton>
            </div>
          </C.TextContainer>
        </C.Content>
      </C.ContainerHeader>
    </C.Container>
  );
};

export default Signup;
