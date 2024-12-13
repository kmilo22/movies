import axios from "axios";

const apiUrl =
  process.env.REACT_APP_API_URL || "http://0.0.0.0:5000";

  const apiClient = axios.create({
  baseURL: apiUrl,
});

export default apiClient;