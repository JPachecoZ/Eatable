import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function getUser() {
  const { token, ...user } = await apiFetch("/profile");
  return user;
}

export async function createUser(credentials) {
  const { token, ...user } = await apiFetch("/users", { body: credentials });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function updateUser(data) {
  const { token, ...user } = await apiFetch("/users", {
    method: "PATCH",
    body: data,
  });
  return user;
}
