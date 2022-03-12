import axios from "utils/axios";

class UserService {
  async GetUser() {
    const res = await axios.get(`/get-user`);
    return res.data;
  }

  async GetUserDetails(_id) {
    const res = await axios.get(`/get-user-details/${_id}`);
    return res.data;
  }
}

const userService = new UserService();

export default userService;
