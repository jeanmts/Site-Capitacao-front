import axios from "axios";

export default axios.create({
  baseURL: "https://extinct-jade-sarong.cyclic.app",
  timeout: 10000,
  headers: { "Content-type": "application/json" },
});