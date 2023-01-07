import IUser from "@interfaces/IUser";
import ISignUpPayload from "@interfaces/ISignUpPayload";

export default interface IAuthContext {
  user?: IUser;
  token?: string;
  setUser: (user: IUser | undefined) => void;
  setToken: (token: string | undefined) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (payload: ISignUpPayload) => Promise<void>;
}
