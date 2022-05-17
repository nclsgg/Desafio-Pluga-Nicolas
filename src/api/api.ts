import axios from "axios"

const api = axios.create({
  baseURL: "https://pluga.co/",
})

export default api