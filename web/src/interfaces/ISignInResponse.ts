import IUser from "./IUser";

export default interface ISignInResponse {
  token: string;
  user: IUser;
}
