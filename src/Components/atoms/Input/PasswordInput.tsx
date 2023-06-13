import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { useController, UseControllerProps } from "react-hook-form";
interface ITextInput extends UseControllerProps {
  placeholder: string;
  error: boolean;
}
const PasswordInput: React.FC<ITextInput> = (props) => {
  const { field, fieldState } = useController(props);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <TextField
      className=" rounded-md py-3"
      {...field}
      placeholder={props.placeholder}
      helperText={fieldState.error?.message}
      error={props.error}
      type={showPassword ? "password" : "text"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
