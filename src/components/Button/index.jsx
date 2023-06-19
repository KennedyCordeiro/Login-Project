import React from 'react'
import * as C from "./styles"
import LoadingButton from '@mui/lab/LoadingButton';

const Button = ({Text, onClick, Type = "button"}) => {
  return (
    <LoadingButton type={Type} onClick={onClick}>
      {Text}
    </LoadingButton>
    )
}

export default Button