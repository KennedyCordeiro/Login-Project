import React from "react";
import "./styles.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
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
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            label={label}
            variant="outlined"
            helperText={errorMessage}
          />
        </Box>
      );
    } else {
      return (
        <Box>
          <FormControl variant="outlined">
            <InputLabel
              placeholder={placeholder}
              value={value}
              htmlFor="outlined-adornment-password"
            >
              Senha
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment
                  position="end"
                  style={{ justifyContent: "end", width: "17%" }}
                >
                  <IconButton
                    style={{ justifyContent: "end", width: "100%" }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
      );
    }
  };

  return handleInput();
};

export default Input;
