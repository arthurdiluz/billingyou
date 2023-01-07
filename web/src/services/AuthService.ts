import ISignInResponse from "@interfaces/ISignInResponse";
import ISignUpPayload from "@interfaces/ISignUpPayload";
import IUser from "@interfaces/IUser";
import { Api } from "@providers/Api";

function signIn(email: string, password: string) {
  return Api.post<ISignInResponse>("/auth/signin", { email, password });
}

function signUp(data: ISignUpPayload) {
  return Api.post<IUser>("/user", data);
}

export const AuthService = {
  signIn,
  signUp,
};
