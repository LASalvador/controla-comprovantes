const axios = require('axios');

const api = axios.create({
    baseURL: 'http://23.101.189.152/'
})

export default api;