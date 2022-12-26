import { Buffer } from "buffer";
import { AppConfig } from "../config";

function getKey(key: string) {
  return AppConfig.STORAGE_BASE_KEY + key;
}

function getItem(key: string) {
  key = getKey(key);
  const item = localStorage.getItem(key);
  if (!item) return;
  return JSON.parse(item);
}

function setItem(key: string, data: any) {
  key = getKey(key);
  localStorage.setItem(key, JSON.stringify(data));
}

function removeItem(key: string) {
  key = getKey(key);
  localStorage.removeItem(key);
}

function getDurationFromToken(token: string): number {
  const payload = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString()
  );
  const expiresIn = payload?.exp - payload?.iat;

  return expiresIn * 1000;
}

export const StorageHelper = {
  getItem,
  setItem,
  removeItem,
  getDurationFromToken,
};
