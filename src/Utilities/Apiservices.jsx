import axios from "axios";

const API_KEY = "https://666e23087a3738f7cace1311.mockapi.io/";
export const axiosService = axios.create({
  baseURL: API_KEY,
  headers: {
    "Content-Type": "application/json",
  },
});
