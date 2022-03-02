import axios from "axios";
import { BACKEND_URL } from "./constants";

// Configure axios
axios.defaults.baseURL = BACKEND_URL + "/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

return axios;
