import { ICustomer } from "./ICustomer";
import { IUser } from "./IUser";

export interface IBilling {
  id: string;
  description: string;
  value: string;
  status: string;
  dueDate: string;
  customerId: string;
  customer: Pick<ICustomer, "id" | "name">;
  userId?: string;
  user?: Pick<IUser, "id">;
}

export type ICreateBilling = Omit<IBilling, "id" | "customer" | "status">;

export type IUpdateBilling = Omit<IBilling, "id" | "customer" | "status">;

export type IBillingForm = Omit<IBilling, "id" | "customerId" | "customer"> & {
  customerId: { label: string; value: string };
};

interface History {
  status: string;
  dueDate: string;
  value: number;
}

export interface IBillingDashboard {
  customers: number;
  late: number;
  paid: number;
  pending: number;
  history: History[];
}
