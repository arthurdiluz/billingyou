import { createContext, useContext, useEffect, useState } from "react";
import { StorageHelper } from "@helpers/StorageHelper";
import IAuthContext from "@interfaces/IAuthContext";
import ISignUpPayload from "@interfaces/ISignUpPayload";
import IUser from "@interfaces/IUser";
import { setBearerToken } from "@providers/Api";
import { AuthService } from "@services/AuthService";
import { HttpStatusCode } from "@enums/HttpStatusCode.enum";

const AuthContext = createContext<IAuthContext>(undefined!);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | undefined>(
    StorageHelper.getItem("user")
  );
  const [token, setToken] = useState<string | undefined>(
    StorageHelper.getItem("token")
  );

  async function signIn(email: string, password: string) {
    const { status, data } = await AuthService.signIn(email, password);

    if (status === HttpStatusCode.Ok) {
      setToken(data.token);
      setUser(data.user);
      StorageHelper.setItem("user", data.user);
      StorageHelper.setItem("token", data.token);
    }
  }

  async function signUp(payload: ISignUpPayload) {
    AuthService.signUp(payload)
      .then(({ status, data }) => {
        if (status === 201) {
          setUser(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    if (token) {
      setBearerToken(token);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, signIn, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
