const ClientController = require('./client')

const makeSut = (url) => {
  const sut = new ClientController(url)
  return sut.handle(url)
}

describe('Client Controller', () => {
  test('Should return 200 if connect', async () => {
    const statusCode = await makeSut('/api')
    expect(statusCode).toBe(200)
  })

  test('Should return 200 if connect in /cliente route', async () => {
    const statusCode = await makeSut('api/cliente')
    expect(statusCode).toBe(200)
  })

  test('Should return 200 if connect in /users and provided name correctly', async () => {
    const name = 'matheus'
    const statusCode = await makeSut(`/api/cliente/name/${name}`)
    expect(statusCode).toBe(200)
  })

  test('Should return 500 if provided incorrectly route', async () => {
    const statusCode = await makeSut('incorrect_route')
    expect(statusCode).toBe(500)
  })
})