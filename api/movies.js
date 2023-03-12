import http from "../helper/http";

export const getPopular = () => {
  return http.get("/movie/popular");
};
