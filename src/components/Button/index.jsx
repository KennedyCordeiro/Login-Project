import React from 'react'
import * as C from "./styles"
import LoadingButton from '@mui/material/Button';

const Button = ({Text, onClick, Type = "button"}) => {
  return (
    <LoadingButton variant="contained">Entrar</LoadingButton>
    )
}

export default Button