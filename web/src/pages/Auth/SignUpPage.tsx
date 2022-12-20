import { useState } from "react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { SignUpResolver } from "@validations/SignUp";
import { useAuthContext } from "@contexts/AuthContext";
import { Alert, AlertEnum } from "@components/Alert/Alert";
import Container from "@components/Container/Container";
import Input from "@components/Form/Input";
import Button from "@components/Button/Button";
import Logo from "@components/Logo/Logo";

type ISignUpForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function SignUpPage() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ISignUpForm>({ resolver: SignUpResolver });
  const { signUp } = useAuthContext();
  const [alert, setAlert] = useState<
    { type: AlertEnum; message: string } | undefined
  >();

  async function onSubmit(values: ISignUpForm) {
    try {
      setAlert(undefined);

      await signUp(values);

      setAlert({
        type: AlertEnum.SUCCESS,
        message: "You've been registered successfully",
      });

      reset({ firstName: "", lastName: "", email: "", password: "" });
    } catch (error) {
      setAlert({
        type: AlertEnum.ERROR,
        message: "Something went wrong. Try again.",
      });
    }
  }

  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="py-10">
        <Logo />
      </div>
      <Container className="w-full max-w-[500px] flex flex-col items-center justify-center p-10">
        <h1 className="text-2xl font-bold text-gray-700 text-center mt-2 mb-8">
          Create your account
        </h1>
        {alert && <Alert type={alert.type}>{alert.message}</Alert>}
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex items-center justify-between gap-2">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  errors={errors}
                  className="w-full mb-2"
                  type="firstName"
                  placeholder="First name"
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  errors={errors}
                  className="w-full mb-2"
                  type="lastName"
                  placeholder="Last name"
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
                errors={errors}
                className="w-full mb-2"
                type="email"
                placeholder="E-mail"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                errors={errors}
                className="w-full mb-2"
                type="password"
                placeholder="Password"
              />
            )}
          />
          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-5 py-2">
          Already own an account?
        </p>
        <Link to="/">
          <Button variant="link">Access your account</Button>
        </Link>
      </Container>
    </div>
  );
}
