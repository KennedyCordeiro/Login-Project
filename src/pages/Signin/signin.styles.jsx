import styled, { keyframes } from "styled-components";
import LoadingButton from "@mui/material/Button";
import backgroundHeader from "../../Images/back.jpg";

const fadeIn = keyframes`
  from { 
    opacity:0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: initial;
  gap: 10px;
  height: 100vh;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
`;

export const Content = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #e9e9e9;
  max-width: 600px;
  border-radius: 5px;
  padding: 20px;
`;

export const DivInput = styled.div`
  width: 90%;
  padding-bottom: 40px;
`;

/* export const HeaderContent = styled.div`
  background-color: #1f0855;
  height: 300px;
  border-radius: 0 7px 230px 230px;
  margin-bottom: 40px;
  padding: 0 !important;
`; */

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* background: linear-gradient(
    30deg,
    #878081,
    rgba(26, 26, 26, 1),
    rgba(84, 52, 171, 1)
  ); */
  background-color: #1d3557;
  background-image: url(${backgroundHeader});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  color: white;
  //border-radius: 30px 0 0 30px;
  float: right;
`;


export const Label = styled.label`
  font-size: 27px;
  margin-bottom: 15px;
  font-weight: 600;
  color: #676767;
  justify-content: center;
  align-items: baseline;
  display: flex;
`;

export const LabelSignup = styled.div`
  font-size: 16px;
  color: #676767;
  padding-top: 35px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  display: flex;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const SignupButton = styled(LoadingButton)`
  color: #ffffff !important;
  width: 80%;
  transition: background-color 0.3s ease-in-out;
  border-radius: 10px !important;
  background-color: #1d3557 !important;

  &:hover {
    animation: fadeIn 0.4s ease-in ;
    background-color: #335c96 !important;
  }

  @keyframes fadeIn {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SigninButton = styled(LoadingButton)`
  transition: background-color 0.3s ease-in-out;
  border-radius: 10px !important;
  width: 80%;

  &:hover {
    animation: fadeIn 0.4s ease-in ;
  }

  @keyframes fadeIn {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`;
