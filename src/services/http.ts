import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("access_token")
    }
});

export default http;