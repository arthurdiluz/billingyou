import { Link } from "react-router-dom";
import { Button, Container, Input, Logo } from "../../../components";

export function SignInPage() {
  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
      {/* <div className="py-10">
        <Logo />
      </div> */}
      <Container className="min-w-fit w-4/12 max-w-full flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl font-bold text-gray-600 text-center">
          Access your account
        </h1>
        <p className="text-sm text-gray-500 text-center mb-5">
          Manage your finances
        </p>
        <Input type="email" placeholder="Your email" className="w-full mb-2" />
        <Input
          type="password"
          placeholder="Your password"
          className="w-full mb-2"
        />
        <Button className="w-full mt-4">Sign in</Button>
        <p className="text-sm font-bold text-gray-500 text-center mt-6 py-1">
          Do not have an account?
        </p>
        <Link to="/signup">
          <Button className="w-full m-auto" variant="link">
            Sign up
          </Button>
        </Link>
      </Container>
    </div>
  );
}
