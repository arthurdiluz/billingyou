import { ISignUpPayload } from "./ISignUpPayload";
import { IUser } from "./IUser";

export interface IAuthContext {
  user?: IUser;
  setUser: (user: IUser | undefined) => void;
  token?: string;
  setToken: (token: string | undefined) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (payload: ISignUpPayload) => Promise<void>;
  logout: () => Promise<void>;
  checkExpiresIn: () => boolean;
  isAuth: boolean;
}
