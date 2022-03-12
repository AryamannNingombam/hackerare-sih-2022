import axios from "axios";
import { BACKEND_URL, GetJWTToken } from "utils/constants";

export const CreateOrder = async (body) => {
  const token = GetJWTToken();
  console.log(token);
  const response = await axios.post(`${BACKEND_URL}/product/buy`, body, {
    headers: {
      token,
    },
  });
  return response.data;
};
