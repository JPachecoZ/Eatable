import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

//Prueba
export async function login(credentials) {
  const { token, ...user } = await apiFetch("login", {
    body: credentials,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}


export function getProducts() {
    return apiFetch("products");
  }