import store from "store";

export const BACKEND_URL = "http://localhost:8080/api";

export const GetJWTToken = () => {
  console.log(store.getState());
  return store.getState().user.user.token;
};
