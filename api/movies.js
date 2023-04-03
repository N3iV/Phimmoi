import http from "../helper/http";

export const getPopular = () => {
  return http.get("/movie/popular");
};
export const getMovieById = (id) => {
  return http.get(`/movie/${id}`);
};

export const getDiscoverMovies = () => {
  return http.get("/discover/movie");
};

export const getTrendingMovies = () => {
  return http.get("/movie/top_rated");
};
export const getMoviesByName = (query) => {
  const params = { query };
  return http.get("/search/movie", { params });
};