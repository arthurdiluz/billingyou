import Button from "@components/Button/Button";
import Container from "@components/Container/Container";
import Input from "@components/Form/Input";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
      {/* <div className="py-10">
        <Logo />
      </div> */}
      <Container className="min-w-fit w-4/12 max-w-full flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl font-bold text-gray-600 text-center mb-5">
          Create your account
        </h1>
        <div className="flex items-center justify-between gap-2">
          <Input
            className="w-full mb-2"
            type="firstName"
            placeholder="First name"
          ></Input>
          <Input
            className="w-full mb-2"
            type="lastName"
            placeholder="Last name"
          ></Input>
        </div>
        <Input className="w-full mb-2" type="email" placeholder="Email"></Input>
        <Input
          className="w-full mb-2"
          type="password"
          placeholder="Password"
        ></Input>
        <Button className="w-full mt-4">Sign up</Button>
        <p className="text-sm font-bold text-gray-500 text-center mt-6 py-1">
          Already have an account?
        </p>
        <Link to="/">
          <Button className="w-full m-auto" variant="link">
            Sign in
          </Button>
        </Link>
      </Container>
    </div>
  );
}
