const TicketController = require('./ticket')

const makeSut = (url) => {
  const sut = new TicketController(url)
  return sut.handle()
}

describe('Ticket Controller', () => {
  test('Should return 200 if connect in /atendimento', async () => {
    const statusCode = await makeSut('/api/atendimento')
    expect(statusCode).toBe(200)
  })

  test('Should return 500 if provided incorrectly route', async () => {
    const statusCode = await makeSut('invalid_route')
    expect(statusCode).toBe(500)
  })

  test('Should return 500 if provided incorrectly client id', async () => {
    const statusCode = await makeSut('/api/atendimento/cliente/invalid_id')
    expect(statusCode).toBe(500)
  })

  test('Should return 200 if provided a valid client id', async () => {
    const statusCode = await makeSut('/api/atendimento/cliente/1')
    expect(statusCode).toBe(200)
  })
})