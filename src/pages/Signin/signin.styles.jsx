import styled from "styled-components";
import backgroundHeader from "../../Images/header3.svg";
import LoadingButton from "@mui/material/Button";
import { styledMui } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

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
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 30px #0003;
  background-color: #fafafa;
  max-width: 500px;
  border-radius: 5px;
  padding: 20px;
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
  background-image: url(${backgroundHeader});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  color: white;
  //border-radius: 30px 0 0 30px;
  float: right;
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #676767;
  justify-content: center;
  align-items: baseline;
  display: flex;
  font-family: sans-serif;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

export const ColorButton = styled(LoadingButton)({
  color: '#2b0707',
  backgroundColor: '#530053',
  '&:hover': {
    backgroundColor: '#ac27ac',
  },
});


