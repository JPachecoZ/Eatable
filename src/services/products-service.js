import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function getProducts() {
    return apiFetch("products");
  }

export function showProducts(id) {
  return apiFetch(`products/${id}`);
}

export function completeOrder(orderData){
  return apiFetch("orders", orderData);
}