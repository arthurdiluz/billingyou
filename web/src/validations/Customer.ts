import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { cpf, cnpj } from "cpf-cnpj-validator";

const CustomerAddSchema = yup.object({
  name: yup.string().required("Insert your name"),
  cpfCnpj: yup
    .string()
    .required("Insert a CPF or CNPJ")
    .test({
      name: "cpfCnpj",
      message: "Insert a valid CPF or CNPJ",
      test: (value?: string) => {
        if (!value) return false;
        return value.length <= 14 ? cpf.isValid(value) : cnpj.isValid(value);
      },
    }),
  email: yup
    .string()
    .email("Insert a valid e-mail")
    .required("Insert your email"),
  phone: yup.string().required("Insert your phone number"),
});

export const CustomerAddResolver = yupResolver(CustomerAddSchema);
