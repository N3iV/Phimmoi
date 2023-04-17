import http from "../helper/http";

export const getAccountDetail = () => {
  return http.get("/account");
};
