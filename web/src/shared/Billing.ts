import { CurrencyHelper } from "@helpers/CurrencyHelper";
import { DateHelper } from "@helpers/DateHelper";
import { IBilling, IBillingForm, ICreateBilling } from "@interfaces/IBilling";
import { DateTime } from "luxon";

function parseStatus(status: string) {
  const reference: any = {
    PENDING: "Pendente",
    PAID: "Pago",
    LATE: "Atrasado",
  };

  return reference[status];
}

function parsePayload(data: IBilling): IBilling & { customerName: string } {
  return {
    ...data,
    value: CurrencyHelper.NumberToCurrency(Number(data.value), `USD`),
    status: parseStatus(data.status),
    dueDate: DateHelper.fromIsoToUtc(data.dueDate),
    customerName: data.customer.name,
  };
}

function formToPayload(form: IBillingForm): ICreateBilling {
  return {
    description: form.description,
    dueDate: DateTime.fromFormat(form.dueDate, "yyyy-MM-dd").toISO(),
    customerId: form.customerId.value,
    value: String(CurrencyHelper.usdToNumber(form.value)),
  };
}

export const Billing = {
  parsePayload,
  formToPayload,
};
