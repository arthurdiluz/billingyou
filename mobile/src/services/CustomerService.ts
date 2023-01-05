import { Api } from "../providers/Api";
import { ICustomer } from "../interfaces/ICustomer";

function create(data: Omit<ICustomer, "id">) {
  return Api.post<ICustomer>("/customer", data);
}

function find() {
  return Api.get<ICustomer[]>("/customer");
}

function findById(id: string) {
  return Api.get<ICustomer>(`/customer/${id}`);
}

function update(id: string, data: Omit<ICustomer, "id">) {
  return Api.patch<ICustomer>(`/customer/${id}`, data);
}

function deleteById(id: string) {
  return Api.delete<void>(`/customer/${id}`);
}

export const CustomerService = {
  create,
  find,
  findById,
  update,
  deleteById,
};
