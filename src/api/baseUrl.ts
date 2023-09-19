import axios from "axios";

const baseUrl = axios.create({ baseURL: "http://127.0.0.1:8000" });
// const baseUrl = axios.create({
//   baseURL: "https://menstk-backend.onrender.com",
// });

export default baseUrl;
