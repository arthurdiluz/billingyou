import ICustomer from "@interfaces/ICustomer";
import { Api } from "../providers/Api";

function create(data: Omit<ICustomer, "id">) {
  return Api.post<ICustomer>("/api/customers", data);
}

function find() {
  return Api.get<ICustomer[]>("/api/customers");
}

function findById(id: string) {
  return Api.get<ICustomer>(`/api/customers/${id}`);
}

function update(id: string, data: Omit<ICustomer, "id">) {
  return Api.patch<ICustomer>(`/api/customers/${id}`, data);
}

function deleteById(id: string) {
  return Api.delete<void>(`/api/customers/${id}`);
}

export const CustomerService = {
  create,
  find,
  findById,
  update,
  deleteById,
};
