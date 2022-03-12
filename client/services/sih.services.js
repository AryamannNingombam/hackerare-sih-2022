import { BACKEND_URL } from "utils/constants";
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

// const sihService = new SIHService();
