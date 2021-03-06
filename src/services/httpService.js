import axios from "axios";
import { toast } from "react-toastify";
import userService from "./userService";

axios.defaults.headers.common["x-auth-token"] = userService.getJwt();

axios.interceptors.response.use(null, error => { //null means any method any url
  const expectedError = error.response && error.response.status >= 403;
  if (expectedError) toast.error("An unexpected error occurred.");
  return Promise.reject(error);
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;
