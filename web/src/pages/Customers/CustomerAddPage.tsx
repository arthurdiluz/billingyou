import Button from "@components/Button/Button";
import Container from "@components/Container/Container";
import Input from "@components/Form/Input";
import InputMask from "@components/Form/InputMask";
import SidebarLayout from "@components/Layout/SidebarLayout";
import PageTitle from "@components/PageTitle/PageTitle";
import ICustomer from "@interfaces/ICustomer";
import { HttpStatusCode } from "@enums/HttpStatusCode.enum";
import { CustomerService } from "@services/CustomerService";
import { CustomerAddResolver } from "@validations/Customer";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
type ICustomersAddForm = Omit<ICustomer, "id">;

export default function CustomerAddPage() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICustomersAddForm>({ resolver: CustomerAddResolver });

  async function onSubmit(values: ICustomersAddForm) {
    try {
      const { status } = await CustomerService.create(values);

      if (status === HttpStatusCode.Created) {
        toast.success("Customer registered successfully");
        reset({ name: "", cpfCnpj: "", email: "", phone: "" });
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <SidebarLayout>
      <PageTitle title="Add new customer" />
      <Container className="p-10 max-w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-full flex flex-col items-center justify-start gap-4"
        >
          <div className="w-full flex items-start gap-2">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Name"
                  className="w-full"
                  errors={errors}
                />
              )}
            />
            <Controller
              name="cpfCnpj"
              control={control}
              render={({ field }) => (
                <InputMask
                  {...field}
                  mask="cpfCnpj"
                  placeholder="CPF or CNPJ"
                  className="w-full"
                  errors={errors}
                />
              )}
            />
          </div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="E-mail"
                className="w-full"
                errors={errors}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 99999-9999"
                placeholder="Phone number"
                className="w-full"
                errors={errors}
              />
            )}
          />
          <Button type="submit" className="w-full my-4">
            Save
          </Button>
        </form>
      </Container>
    </SidebarLayout>
  );
}
