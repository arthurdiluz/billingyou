export default interface IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  firstName: string;
  lastName: string;
  email: string;
  password?: string | undefined;
}
