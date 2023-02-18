import axios from "axios";
const instance = axios.create();

instance.interceptors.request.use(function (config) {
  config.headers.platform =  "mweb";
  return config;
});

instance.interceptors.response.use(
  ({ data = {} }) => {
    const { status, data: response } = data;
    if (status >= 200 && status < 300) {
      return response;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
