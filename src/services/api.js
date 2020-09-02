const axios = require('axios')

const api = axios.default.create({
  baseURL: 'https://api-find.herokuapp.com'
})

module.exports = api

