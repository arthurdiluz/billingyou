import { ISignInResponse } from "../interfaces/ISignInResponse";
import { ISignUpPayload } from "../interfaces/ISignUpPayload";
import { IUser } from "../interfaces/IUser";
import { Api } from "../providers/Api";

async function signIn(email: string, password: string) {
  return await Api.post<ISignInResponse>("/auth/signin", {
    email,
    password,
  });
}

async function signUp(data: ISignUpPayload) {
  return await Api.post<IUser>("/user", data);
}

export const AuthService = {
  signIn,
  signUp,
};
