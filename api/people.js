import http from "../helper/http";

export const getTrendingPeople = () => {
  return http.get("/trending/person/week");
};
