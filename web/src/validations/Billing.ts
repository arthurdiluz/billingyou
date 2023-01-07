import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const BillingAddSchema = yup.object({
  customerId: yup.object({
    label: yup.string(),
    value: yup.string().required("Select a client"),
  }),
  value: yup.string().required("Insert the value"),
  description: yup.string().required("Insert a description"),
  dueDate: yup.string().required("Insert the due date"),
});

export const BillingResolver = yupResolver(BillingAddSchema);
