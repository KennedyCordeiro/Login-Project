import React from "react";
import "./styles.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";

const Input = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  errorMessage,
  onlyNumber,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleInput = () => {
    if (type) {
      return (
        <Box className="text-input">
          <TextField
            id={error ? "outlined-error-helper-text" : "outlined-basic"}
            type="text"
            placeholder={value.lenght > 0 ? "" : placeholder}
            value={value}
            onChange={onChange}
            label={label}
            variant="standard"
            helperText={errorMessage}
          />
        </Box>
      );
    } else {
      return (
        <Box className="text-input">
          <TextField
            id={error ? "outlined-error-helper-text" : "outlined-basic"}
            type={showPassword ? "text" : "password"}
            placeholder={value.lenght > 0 ? "" : placeholder}
            value={value}
            onChange={onChange}
            label={label}
            helperText={errorMessage}
            variant="standard"
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment
                  id="standard-adornment-password"
                  position="end"
                  style={{
                    width: "0",
                    justifyContent: "end",
                    marginLeft: "0",
                  }}
                >
                  <IconButton
                    onClick={handleClickShowPassword}
                    style={{
                      width: "40px",

                      marginBottom: "10px",
                    }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      );
    }
  };

  return handleInput();
};

export default Input;
