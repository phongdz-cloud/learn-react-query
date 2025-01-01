import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    // Add any request interceptors here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    // Add any response interceptors here
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
