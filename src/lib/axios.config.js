import axios from "axios";

// Normalize base URL (avoid double /api and trailing slashes)
const RAW_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "https://verbalmdt.softvencefsd.xyz";
const STRIPPED = RAW_BASE.replace(/\/+$/, "");
const API_BASE = STRIPPED.endsWith("/api") ? STRIPPED : `${STRIPPED}/api`;

const axiosPublic = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000,
  withCredentials: false,
});

const axiosPrivate = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000,
  withCredentials: false,
});

axiosPrivate.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosPrivate, axiosPublic };
