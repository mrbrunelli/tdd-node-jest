const FilialController = require('../filial/filial')

const makeSut = (url) => {
  const sut = new FilialController(url)
  return sut.handle(url)
}

describe('Filial Controller', () => {
  test('Should return 200 if connect in /filial', async () => {
    const statusCode = await makeSut('/api/filial')
    expect(statusCode).toBe(200)
  })

  test('Should return 500 if provided incorrectly route', async () => {
    const statusCode = await makeSut('invalid_route')
    expect(statusCode).toBe(500)
  })
})