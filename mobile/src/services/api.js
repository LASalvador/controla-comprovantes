const axios = require('axios');

const api = axios.create({
    baseURL: 'http://104.214.50.225/'
})

export default api;