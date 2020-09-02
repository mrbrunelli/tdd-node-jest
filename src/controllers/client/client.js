const api = require('../../services/api')
const { serverError } = require('../../errors')

class ClientController {
  constructor(url) {
    this.url = url
  }
  async handle() {
    try {
      const statusCode = await api.get(this.url)
      return statusCode.status
    } catch (err) {
      return serverError()
    }
  }
}

module.exports = ClientController