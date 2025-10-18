// import axios from "axios";

// // Use Next.js environment variables or fallback to localhost
// const API_BASE_URL =
//   process.env.NEXT_PUBLIC_API_BASE_URL || "https://verbalmdt.softvencefsd.xyz";

// const axiosPublic = axios.create({
//   baseURL: `${API_BASE_URL}/api`,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   timeout: 5000,
//   withCredentials: true, // Important for cookies
// });

// const axiosPrivate = axios.create({
//   baseURL: `${API_BASE_URL}/api`,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   timeout: 5000,
//   withCredentials: true, // Important for cookies
// });

// axiosPrivate.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem("token");
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// export { axiosPrivate, axiosPublic };

import axios from "axios";

// Normalize base URL to avoid double /api and trailing slashes
const RAW_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://verbalmdt.softvencefsd.xyz";
const STRIPPED_BASE = RAW_BASE_URL.replace(/\/+$/, "");
const API_BASE_URL = STRIPPED_BASE.endsWith("/api")
  ? STRIPPED_BASE
  : `${STRIPPED_BASE}/api`;

//config
const axiosPublic = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000,
  withCredentials: false, // Important for cookies
});

const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 5000,
});

axiosPrivate.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { axiosPrivate, axiosPublic };
