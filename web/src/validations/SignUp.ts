import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUpSchema = yup.object({
  firstName: yup.string().required("Insert your first name"),
  lastName: yup.string().required("Insert your last name"),
  email: yup.string().email("Insert a valid email").required("Insert an email"),
  password: yup.string().required("Insert a password"),
});

export const SignUpResolver = yupResolver(SignUpSchema);
