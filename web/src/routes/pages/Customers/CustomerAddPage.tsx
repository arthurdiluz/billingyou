import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  Button,
  Container,
  Input,
  InputMask,
  PageTitle,
  SidebarLayout,
} from "../../../components";
import { ICustomer } from "../../../interfaces";
import { CustomerAddResolver } from "../../../validations";
import { CustomerService } from "../../../services/CustomerService";

type ICustomersAddForm = Omit<ICustomer, "id">;

export function CustomersAddPage() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICustomersAddForm>({ resolver: CustomerAddResolver });

  async function onSubmit(values: ICustomersAddForm) {
    try {
      const { status } = await CustomerService.create(values);

      if (status === 201) {
        toast.success("Client registered successfully!");
        reset({ name: "", cpfCnpj: "", email: "", phone: "" });
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <SidebarLayout>
      <PageTitle title="Create new client" />
      <Container className="p-10 max-w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-full flex flex-col items-start justify-start gap-4"
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
                placeholder="Phone"
                className="w-full"
                errors={errors}
              />
            )}
          />
          <Button className="w-full my-4" type="submit">
            Salvar
          </Button>
        </form>
      </Container>
    </SidebarLayout>
  );
}
