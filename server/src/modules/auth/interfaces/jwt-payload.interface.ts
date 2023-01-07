export default interface IJwtPayload {
  id: string;
  updatedAt: string | Date;
  createdAt: string | Date;
  deletedAt: string | Date | null;
  firstName: string;
  lastName: string;
  email: string;
  iat: number;
  exp: number;
}
