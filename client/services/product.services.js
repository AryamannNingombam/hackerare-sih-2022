import { BACKEND_URL } from "utils/constants";
import axios from "axios";

export const GetAllProducts = async (body) => {
  const response = await axios.get(`${BACKEND_URL}/product/get-all`);
  return response.data;
};

export const GetProductDetails = async (uid)=>{
  const response = await axios.get(`${BACKEND_URL}/product/get-details/${uid}`);
  return response.data

}

// const sihService = new SIHService();
