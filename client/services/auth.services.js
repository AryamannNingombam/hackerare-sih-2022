import axios from "../utils/axios";

class AuthService {
  SignIn(email, password) {
    return axios.post(`/sign-in`, {
      email,
      password,
    });
  }

  SignUp(email, password) {
    return axios.post(`/sign-up`, {
      email,
      password,
    });
  }
}

const authService = new AuthService();

export default authService;
