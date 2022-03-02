import axios from "../utils/axios";

class SIHService {
  GetAllSIH() {
    return axios.get(`/get-all`);
  }

  AddSIH(sih) {
    return axios.post(`/add`, sih);
  }

  GetSIHDetails(id) {
    return axios.get(`/get-details?_id=${id}`);
  }
}

const sihService = new SIHService();

export default sihService;
