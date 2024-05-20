import Axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import { getToken } from "./token";
import { notification } from "antd";

const request = Axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 60 * 1000,
});

let isShowing = false;

const showMsg = (message: string, cb?: () => void) => {
  if (isShowing) return;
  isShowing = true;
  notification.error({
    message,
    duration: 2,
    onClose: () => {
      isShowing = false;
      cb && cb();
    },
  });
};

const handleError = (error: AxiosError) => {
  const { statusText, status } = error.response!;
  showMsg(`【${status}】${statusText}`);
  return Promise.reject(error);
};

request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error: AxiosError) => handleError(error),
);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => handleError(error),
);

export default request;
