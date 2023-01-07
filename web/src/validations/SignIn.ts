import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignInSchema = yup.object({
  email: yup.string().email("Insert a valid email").required("Insert an email"),
  password: yup.string().required("Insert a password"),
});

export const SignInResolver = yupResolver(SignInSchema);
