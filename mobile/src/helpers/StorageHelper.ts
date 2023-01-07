import AsyncStorage from "@react-native-async-storage/async-storage";
import { Buffer } from "buffer";
import { AppConfig } from "../config";

interface IJwtPayload {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  firstName: string;
  lastName: string;
  email: string;
  iat: number;
  exp: number;
}

function getKey(key: string) {
  return AppConfig.STORAGE_BASE_KEY + key;
}

async function getItem(key: string) {
  key = getKey(key);
  const item = await AsyncStorage.getItem(key);
  if (!item) return;

  return JSON.parse(item);
}

async function setItem(key: string, data: object | string) {
  key = getKey(key);
  await AsyncStorage.setItem(key, JSON.stringify(data));
}

async function removeItem(key: string) {
  key = getKey(key);
  await AsyncStorage.removeItem(key);
}

function getDurationFromToken(token: string): number {
  const payload: IJwtPayload = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString()
  );
  const expiresIn = payload.exp - payload.iat;

  return expiresIn * 1000;
}

export const StorageHelper = {
  getItem,
  setItem,
  removeItem,
  getDurationFromToken,
};
