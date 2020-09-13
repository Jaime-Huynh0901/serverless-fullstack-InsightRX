import http from "./http";

const login = (data) => {
  return http.post("/login", data);
};
const logout = () => {
  return http.post("/logout");
};
const create = (data) => {
  return http.post("/eventtype", data);
};
const getAll = () => {
  return http.get("/eventtypes");
};

const getSources = () => {
  return http.get("/eventsources");
};

const getEvents = (query) => {
  return http.get("/events", { params: query });
};

const getEventsReport = (query) => {
  return http.get("/reports/eventTypeSummaryReport", { params: query });
};

const getUser = () => {
  return http.get("/");
};

export default {
  login,
  logout,
  create,
  getAll,
  getSources,
  getEvents,
  getUser,
  getEventsReport
};
