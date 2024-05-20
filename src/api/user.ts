import request from "@/utils/request";
import { LoginFieldType } from "app";

export const login = (data: LoginFieldType) => {
  return request<{ token: string }>({
    url: "/auth/login",
    method: "post",
    data,
  });
};
