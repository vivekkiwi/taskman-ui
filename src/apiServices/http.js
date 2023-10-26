import axiosInstance from "./axiosInstance";

export function getDefaultConfig() {
  return {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  };
}

function getUpdatedConfig(config) {
  const updatedConfig = {
    ...getDefaultConfig(),
    ...(config || {}),
  };

  return updatedConfig;
}

const http = {
  get: function (url, config = {}) {
    return axiosInstance.get(url, getUpdatedConfig(config));
  },
  post: function (url, data, config = {}) {
    return axiosInstance.post(url, data, getUpdatedConfig(config));
  },
};

export default http;
