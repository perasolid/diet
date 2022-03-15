const request = require('supertest')
require('./config/testConfig')

const app = require('../app')
describe('Get nutritions with name: Bananas, raw', () => {
  it('should get bananas, raw', async () => {
    const res = await request(app)
      .get('/nutritions/all?search=Bananas, raw')
    expect(res.statusCode).toEqual(200)
  })
})