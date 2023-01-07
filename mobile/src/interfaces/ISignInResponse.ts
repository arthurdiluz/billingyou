import { IUser } from "./IUser";

export interface ISignInResponse {
  token: string;
  user: IUser;
  expiresIn: string;
}
