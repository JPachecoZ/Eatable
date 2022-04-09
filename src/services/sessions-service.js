import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function login(credentials = { email: "", password: "" }) {
  const { token, ...user } = await apiFetch("/login", { body: credentials });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  await apiFetch("/logout");
  sessionStorage.removeItem(tokenKey);
}
