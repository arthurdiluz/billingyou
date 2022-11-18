import { genSaltSync, hashSync } from 'bcrypt';

export class Utils {
  /**
   * Encrypts passwords
   * @param password Raw password
   * @returns Encrypted password
   */
  static hashPassword(password: string): string {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
  }
}
