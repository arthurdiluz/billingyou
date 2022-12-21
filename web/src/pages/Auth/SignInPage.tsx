import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useAuthContext } from "@contexts/AuthContext";
import { SignInResolver } from "@validations/SignIn";
import Button from "@components/Button/Button";
import Container from "@components/Container/Container";
import Input from "@components/Form/Input";
import Logo from "@components/Logo/Logo";
import { useState } from "react";
import { Alert, AlertEnum } from "@components/Alert/Alert";

type ISignInForm = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ISignInForm>({ resolver: SignInResolver });
  const { signIn } = useAuthContext();
  const [alert, setAlert] = useState<
    { type: AlertEnum; message: string } | undefined
  >();

  async function onSubmit({ email, password }: ISignInForm) {
    try {
      setAlert(undefined);

      await signIn(email, password);

      reset({ email: "", password: "" });
    } catch (error) {
      setAlert({
        type: AlertEnum.ERROR,
        message: "Invalid credentials. Try again.",
      });
    }
  }

  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="py-10">
        <Logo />
      </div>
      <Container className="w-full max-w-[500px] flex flex-col items-center justify-center p-10">
        <h1 className="text-2xl font-bold text-gray-700 text-center mt-2">
          Access your account
        </h1>
        {alert && <Alert type={alert.type}>{alert.message}</Alert>}
        <p className="text-sm text-gray-600 text-center mb-8">
          Manage your finances
        </p>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
            Sign in
          </Button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-5 py-2">
          Still don't have an account?
        </p>
        <Link to="/signup">
          <Button variant="link">Sign up</Button>
        </Link>
      </Container>
    </div>
  );
}
