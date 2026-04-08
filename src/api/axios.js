import axios from 'axios';

const api = axios.create({
    baseURL: 'https://smart-feedback-arxx.onrender.com/api',
});

export default api;