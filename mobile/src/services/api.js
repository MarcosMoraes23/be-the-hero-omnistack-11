import axios from 'axios';

const api = axios.create({
    baseURL: `http://${HOST}:3333`
})

export default api;