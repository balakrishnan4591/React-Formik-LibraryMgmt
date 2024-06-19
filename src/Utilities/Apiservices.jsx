import axios from "axios";
//temp mail revaw48202@huizk.com

// const API_KEY = 'https://65d858a0c96fbb24c1bb4db4.mockapi.io'
const API_KEY = "https://666e23087a3738f7cace1311.mockapi.io/";
export const axiosService = axios.create({
  baseURL: API_KEY,
  headers: {
    "Content-Type": "application/json",
  },
});
