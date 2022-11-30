import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { DateTime } from 'luxon';

export class Utils {
  /**
   * Encrypts passwords
   * @param password Plain text password
   * @returns Encrypted password
   */
  static hashPassword(password: string): string {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
  }

  /**
   * Compare a plain text password with encrypted password stored in DB
   * @param password Plain text password
   * @param hash Encrypted password
   * @returns Whether passwords match or not
   */
  static isValidPassword(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }

  /**
   * Get expiration date from JWT token
   * @param token JWT token
   * @returns expiration date (ISO String)
   */
  static getExpirationDateFromToken(token: string): string {
    const payload = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString(),
    );
    const expiresIn = DateTime.fromMillis(payload?.exp * 1000)
      .toUTC()
      .toISO();

    return expiresIn;
  }
}
