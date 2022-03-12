import { BACKEND_URL, GetJWTToken } from "utils/constants";
import axios from "axios";
// class SIHService {
//   GetAllSIH() {
//     return axios.get(`/get-all`);
//   }

//   AddSIH(sih) {
//     return axios.post(`/add`, sih);
//   }

//   GetSIHDetails(id) {
//     return axios.get(`/get-details?_id=${id}`);
//   }
// }

export const GetAllSIH = async () => {
  const response = await axios.get(`${BACKEND_URL}/sih/get-all`);
  return response.data;
};

export const GetSIHDetails = async (uid) => {
  const response = await axios.get(`${BACKEND_URL}/sih/get-details/${uid}`);
  return response.data;
};

export const AddSIH = async (body) => {
  const response = await axios.post(`${BACKEND_URL}/sih/make`, body);
  return response.data;
};

export const RequestSIH = async (body) => {
  const token = GetJWTToken();
  const response = await axios.post(
    `${BACKEND_URL}/sih-request/request`,
    body,
    {
      headers: {
        token,
      },
    }
  );
  return response.data;
};

// const sihService = new SIHService();
