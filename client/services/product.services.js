import { BACKEND_URL, GetJWTToken } from "utils/constants";
import axios from "axios";

export const GetAllProducts = async (body) => {
  const response = await axios.get(`${BACKEND_URL}/product/get-all`);
  return response.data;
};

export const GetProductDetails = async (uid) => {
  const response = await axios.get(`${BACKEND_URL}/product/get-details/${uid}`);
  return response.data;
};

export const GetAllProductsBySIH = async (uid) => {
  const response = await axios.get(
    `${BACKEND_URL}/product/get-all-by-sih/${uid}`
  );
  return response.data;
};

export const BuyProduct = async (body) => {
  const token = GetJWTToken();
  const response = await axios.put(`${BACKEND_URL}/product/buy`, body, {
    headers: { token },
  });
  return response.data;
};

export const AddProduct = async (body) => {
  const token = GetJWTToken();
  const response = await axios.post(`${BACKEND_URL}/product/add`, body, {
    headers: { token },
  });
  return response.data;
};

// const sihService = new SIHService();
