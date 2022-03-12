import { BACKEND_URL } from "utils/constants";
import axios from "axios";

export const GetAllProducts = async (body) => {
  const response = await axios.get(`${BACKEND_URL}/product/get-all`);
  return response.data;
};

// const sihService = new SIHService();
