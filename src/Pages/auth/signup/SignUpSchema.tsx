import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
  firstName: yup.string(),
  lastName: yup.string(),
  username: yup.string(),
});
