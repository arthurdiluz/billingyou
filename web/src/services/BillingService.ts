import {
  IBilling,
  IBillingDashboard,
  ICreateBilling,
  IUpdateBilling,
} from "@interfaces/IBilling";
import { Api } from "@providers/Api";

function dashboard() {
  return Api.get<IBillingDashboard>("/billing/dashboard");
}

function create(data: ICreateBilling) {
  return Api.post<IBilling>("/billing", data);
}

function find() {
  return Api.get<IBilling[]>("/billing");
}

function findById(id: string) {
  return Api.get<IBilling>(`/billing/${id}`);
}

function update(id: string, data: IUpdateBilling) {
  return Api.patch<IBilling>(`/billing/${id}`, data);
}

function deleteById(id: string) {
  return Api.delete<void>(`/billing/${id}`);
}

export const BillingService = {
  dashboard,
  find,
  create,
  findById,
  update,
  deleteById,
};
