import { BACKEND_URL } from "utils/constants";
import axios from "axios";
export const SignIn = async (body) => {
  const response = await axios.post(`${BACKEND_URL}/auth/sign-in`, body);
  return response.data;
};

export const SignUp = async (body) => {
  const response = await axios.post(`${BACKEND_URL}/auth/sign-up`, body);
  return response.data;
};
