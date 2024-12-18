import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.Authorization;
  }
};

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

export const handleError = (error, defaultMessage) => {
  if (error.response) {
    const errorMessage =
      (error.response.data && error.response.data.message) ||
      error.response.statusText ||
      defaultMessage;
    console.error(`${defaultMessage} with server response:`, errorMessage);
    throw new Error(errorMessage);
  } else {
    console.error(`${defaultMessage} with error:`, error.message);
    throw new Error(error.message || defaultMessage);
  }
};
