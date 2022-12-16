import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Button from "@components/Button/Button";
import Container from "@components/Container/Container";
import Input from "@components/Form/Input";
import Select from "@components/Form/Select";
import SidebarLayout from "@components/Layout/SidebarLayout";
import PageTitle from "@components/PageTitle/PageTitle";
import InputCurrency from "@components/Form/InputCurrency";
import { useCustomer } from "@hooks/useCustomer";
import { Billing } from "@shared/Billing";
import { IBillingForm } from "@interfaces/IBilling";
import { BillingService } from "@services/BillingService";
import { BillingResolver } from "@validations/Billing";

export default function BillingAddPage() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IBillingForm>({ resolver: BillingResolver });
  const { customersList, findCustomers } = useCustomer();

  async function onSubmit(values: IBillingForm) {
    try {
      const { status } = await BillingService.create(
        Billing.formToPayload(values)
      );

      if (status === 201) {
        toast.success("Billing created successfully");

        reset({
          description: "",
          dueDate: "",
          value: "",
          customerId: undefined,
        });
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    findCustomers();
  }, []);

  return (
    <SidebarLayout>
      <PageTitle title="Add new billing" />
      <Container className="p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg flex flex-col items-start justify-start gap-2"
        >
          <Controller
            name="customerId"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Select a customer"
                errors={errors}
                options={customersList}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Billing description"
                className="w-full"
                errors={errors}
              />
            )}
          />
          <Controller
            name="value"
            control={control}
            render={({ field }) => (
              <InputCurrency
                {...field}
                placeholder="Value"
                className="w-full"
                errors={errors}
              />
            )}
          />
          <Controller
            name="dueDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                placeholder="Name"
                className="w-full"
                errors={errors}
              />
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Container>
    </SidebarLayout>
  );
}
