import { useMemo, useState } from "react";
import { CustomerService } from "@services/CustomerService";
import ICustomer from "@interfaces/ICustomer";
import { HttpStatusCode } from "@enums/HttpStatusCode.enum";

export const useCustomer = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  async function findCustomers() {
    const { status, data } = await CustomerService.find();
    if (status === HttpStatusCode.Ok) {
      setCustomers(data);
    }
  }

  const customersList = useMemo(
    () =>
      customers.map((customer) => ({
        label: customer.name,
        value: customer.id,
      })),
    [customers]
  );

  return {
    customers,
    customersList,
    findCustomers,
  };
};
