import axios from 'axios'
const baseURL = "https://dummyjson.com/auth";

// getting the token from the localstorage
export const getToken = () => localStorage.getItem("tokenData");

  export const getAuthorizationHeader = () => `Bearer ${ localStorage.getItem("tokenData")}`;
  export const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: getAuthorizationHeader() },
  });
