import axios from "axios";

import { API_BASE_URL } from "~/config";

const http = axios.create({
  baseURL: API_BASE_URL || "http://localhost:8080",
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export const fetcher = (url: string) => http.get(url).then((res) => res.data);

export default http;
