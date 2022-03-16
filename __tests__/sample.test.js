const request = require('supertest')
require('./config/testConfig')

const app = require('../app')

var User = mongoose.model('User');

beforeEach(async () => {
  // seed with some data
  var user = new User();
  user.name = 'John Doe';
  user.email = 'john@email.com';
  user.setPassword('John123!');   
  await user.save();
});

afterEach(async () => {
  await User.deleteMany({});
});

afterAll(done => {
  // Close open connection in mongoose
  mongoose.connection.close();
  done();
});

describe('Get user', () => {
  it('should get user John Doe', async () => {
    const res = await request(app)
      .get('/users/all?search=John Doe')
    expect(res.statusCode).toEqual(200)
  })
})