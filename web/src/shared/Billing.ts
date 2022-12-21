import { DateTime } from "luxon";
import { CurrencyHelper } from "@helpers/CurrencyHelper";
import { DateHelper } from "@helpers/DateHelper";
import { IBilling, IBillingForm, ICreateBilling } from "@interfaces/IBilling";

function parsePayload({
  value,
  status,
  dueDate,
  ...data
}: IBilling): IBilling & { customerName: string } {
  return {
    ...data,
    value: CurrencyHelper.NumberToCurrency(Number(value), `USD`),
    status: status?.toUpperCase(),
    dueDate: DateHelper.fromIsoToUtc(dueDate),
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
