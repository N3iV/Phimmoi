import http from "../helper/http";

export const getPopular = () => {
  return http.get("/movie/popular");
};
export const getMovieById = (id) => {
  return http.get(`/movie/${id}`);
};
