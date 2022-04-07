import apiFetch from "./api-fetch";

export function getProducts() {
    return apiFetch("products");
  }