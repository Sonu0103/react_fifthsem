import axios from "axios";
// creating an instance of axios

const Api = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

//  creating authorization config
const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem("token ")}`,
  },
};
export const testApi = () => Api.get("/test");

// creating register api

export const registerUserApi = (data) => Api.post("/api/user/create", data);

// Creating login api

export const loginUserApi = (data) => Api.post("/api/user/login", data);

export const createProductApi = (data) => Api.post("/api/product/create", data);

// fetch al products
export const getAllProducts = () =>
  Api.get("/api/product/get_all_products", config);

// fetch single product
export const getProduct = (id) =>
  Api.get(`/api/product/get_single_product/${id}`, config);

// delete product
export const deleteProduct = (id) =>
  Api.delete(`/api/product/delete_product/${id}`);

// update
export const updateProduct = (id, data) =>
  Api.put(`/api/product/update_product/${id}`, data);
