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

export const GetAll = async (body) => {
  const response = await axios.get(`${BACKEND_URL}/sih/get-all`);
  return response.data;
};

// const sihService = new SIHService();
