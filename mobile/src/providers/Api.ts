import axios from "axios";
import { HttpStatusCode } from "../enums/HttpStatusCode.enum";
import { StorageHelper } from "../helpers/StorageHelper";

export const Api = axios.create({ baseURL: "http://10.0.2.2:3333/api" });

Api.interceptors.response.use(
  function (value) {
    return value;
  },
  function (error) {
    if (error?.response?.status === HttpStatusCode.Unauthorized) {
      Promise.all([
        StorageHelper.removeItem("user"),
        StorageHelper.removeItem("token"),
      ]);
    }

    return Promise.reject(error);
  }
);

export function setBearerToken(token: string) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
