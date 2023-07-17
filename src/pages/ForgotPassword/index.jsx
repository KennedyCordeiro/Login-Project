import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import useAuth from "../../hooks/useAuth";
import * as C from "./forgotPassword.styles";
import Button from "../../components/Button";
import { TextField } from "@mui/material";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [sendCode, setSendCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const { forgotPassword } = useAuth();
  const [error, setError] = useState(false);
  const [recoveryCode, setRecoveryCode] = useState("");

  const handleCodeChange = (index, value) => {
    const updatedCode = recoveryCode.slice(0, index) + value;
    setRecoveryCode(updatedCode.slice(0, 6));
  };
  return (
    <C.Container>
      <C.ContainerHeader>
        <C.Content>
          <C.Label>Esqueceu sua senha?</C.Label>
          <C.SpanContent>
            Não se preocupe estamos aqui para ajudar
          </C.SpanContent>
          {sendCode && (
            <>
              <Input
                type={true}
                error={error}
                label={"Email"}
                placeholder="Insira seu email cadastrado"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button text="Recuperar"></Button>
              <C.LabelSignup>
                <span>Já possui conta ?</span>
                <C.Strong>
                  <Link to="/signin">&nbsp;Login</Link>
                </C.Strong>
              </C.LabelSignup>
            </>
          )}
          {!sendCode && (
            <>
              <C.DivName>
                <TextField
                  placeholder="0"
                  type="number"
                  value={recoveryCode[0] || ""}
                  min={0}
                  max={9}
                  onChange={(e) => handleCodeChange(0, e.target.value)}
                />
                <TextField
                  placeholder="0"
                  type="number"
                  value={recoveryCode[1] || ""}
                  min={0}
                  max={9}
                  onChange={(e) => handleCodeChange(1, e.target.value)}
                />
                <TextField
                  placeholder="0"
                  type="number"
                  value={recoveryCode[2] || ""}
                  min={0}
                  max={9}
                  onChange={(e) => handleCodeChange(2, e.target.value)}
                />
                <TextField
                  placeholder="0"
                  type="number"
                  value={recoveryCode[3] || ""}
                  min={0}
                  max={9}
                  onChange={(e) => handleCodeChange(3, e.target.value)}
                />
                <TextField
                  placeholder="0"
                  type="number"
                  value={recoveryCode[4] || ""}
                  min={0}
                  max={9}
                  onChange={(e) => handleCodeChange(4, e.target.value)}
                />
                <TextField
                  placeholder="0"
                  type="number"
                  value={recoveryCode[5] || ""}
                  min={0}
                  max={9}
                  onChange={(e) => handleCodeChange(5, e.target.value)}
                />
              </C.DivName>
              <Button text="Validar"></Button>
              <C.LabelSignup>
                <span>Já possui conta ?</span>
                <C.Strong>
                  <Link to="/signin">&nbsp;Login</Link>
                </C.Strong>
              </C.LabelSignup>
            </>
          )}
        </C.Content>
      </C.ContainerHeader>
    </C.Container>
  );
};

export default ForgotPassword;
