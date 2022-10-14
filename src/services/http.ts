import axios from "axios";

const http = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("access_token")
    }
});

export default http;