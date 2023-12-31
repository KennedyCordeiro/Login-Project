import LoadingButton from "@mui/material/Button";
import styled, { keyframes } from "styled-components";
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
  //font-family: "Euclid Circular A";
  font-family: inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
`;

export const Content = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
  background-color: #fafafa;
  max-width: 600px;
  border-radius: 15px;
  margin-left: 60px;
  padding: 20px;
`;

export const LabelForgot = styled.div`
  font-size: 16px;
  color: #676767;
  padding-top: 35px;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SpanContent = styled.span`
  font-size: 13px;
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: baseline;
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
  //border-radius: 30px 0 0 30px;
  float: right;
`;

export const TextContainer = styled.div`
  text-align: center;
  justify-content: center;
  font-size: 15px;
`;

export const Label = styled.label`
  font-size: 35px;
  font-weight: 600;
  color: #676767;
  justify-content: center;
  align-items: baseline;
  display: flex;
`;

export const Strong = styled.strong`
  font-size: 15px;
  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const DivName = styled.div`
  width: 100%;
  display: flex;
  justify-content: initial;
  gap: 30px;
  margin-bottom: 20px;
`;

export const DivLayout = styled.div`
  gap: 3px;
`;

export const LoginButton = styled(LoadingButton)`
  color: #ffffff !important;
  width: 80%;
  height: 40px;
  transition: background-color 0.3s ease-in-out;
  border-radius: 40px !important;
  background-color: #306ec7 !important;
  margin-top: 20px !important;
  &:hover {
    animation: fadeIn 0.4s ease-in;
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
