import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { TextInput } from "../../../Components/atoms/Input";
const Login = () => {
  const { t } = useTranslation();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required(
        t("validations:inputs.field-required", {
          field: "Email",
        })
      )
      .email(t("validations:inputs.email-invalid")),
    password: yup.string().required(
      t("validations:inputs.field-required", {
        field: "Password",
      })
    ),
  });
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        placeholder={"Email A"}
        error={errors.email?.message ? true : false}
        name={"email"}
        control={control}
      />
      <TextInput
        placeholder={"Password"}
        error={errors.email?.message ? true : false}
        name={"password"}
        control={control}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Login;
