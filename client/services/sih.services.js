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
  console.log("BODy BHAI", body);
  const token = GetJWTToken();
  const response = await axios.post(`${BACKEND_URL}/sih/make`, body, {
    headers: {
      token,
    },
  });
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

export const GetUserSIH = async () => {
  const token = GetJWTToken();
  const response = await axios.get(`${BACKEND_URL}/sih/get-user-sih`, {
    headers: { token },
  });
  return response.data;
};

export const GetAllSIHRequests = async () => {
  const token = GetJWTToken();
  const response = await axios.get(`${BACKEND_URL}/sih-request/get-all`, {
    headers: { token },
  });
  return response.data;
};

export const AcceptUserRequest = async (_id) => {
  const token = GetJWTToken();
  const response = await axios.post(
    `${BACKEND_URL}/sih-request/accept/${_id}`,
    {},
    {
      headers: { token },
    }
  );
  return response.data;
};

export const RejectUserRequest = async (_id) => {
  const token = GetJWTToken();
  const response = await axios.post(
    `${BACKEND_URL}/sih-request/reject/${_id}`,
    {},
    {
      headers: { token },
    }
  );
  return response.data;
};
