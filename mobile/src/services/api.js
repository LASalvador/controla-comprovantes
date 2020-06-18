const axios = require('axios');

const api = axios.create({
    baseURL: 'http://104.214.117.23/'
})

export default api;