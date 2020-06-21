const axios = require('axios');

const api = axios.create({
    baseURL: 'http://70.37.92.12'
})

export default api;