import Axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getToken } from "./token";
import { notification } from "antd";

const server = Axios.create({
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

server.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => handleError(error),
);

server.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => handleError(error),
);

function request<T = unknown>(config: AxiosRequestConfig) {
  return new Promise<T>((resolve, reject) => {
    server(config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => reject(e));
  });
}

export default request;
