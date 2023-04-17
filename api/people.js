import http from "../helper/http";

export const getTrendingPeople = () => {
  return http.get("/trending/person/week");
};
export const getPersonsByName = (query) => {
  const params = { query };
  return http.get("search/person", { params });
};