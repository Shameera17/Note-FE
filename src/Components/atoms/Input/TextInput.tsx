import { TextField } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";
interface ITextInput extends UseControllerProps {
  placeholder: string;
  error: boolean;
}
const TextInput: React.FC<ITextInput> = (props) => {
  const { field, fieldState } = useController(props);

  return (
    <TextField
      className=" rounded-md py-3"
      {...field}
      placeholder={props.placeholder}
      error={props.error}
      helperText={fieldState.error?.message}
    />
  );
};

export default TextInput;
