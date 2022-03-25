const request = require('supertest')
require('./config/testConfig')

const app = require('../app')

var User = mongoose.model('User');
var Verification_token = mongoose.model('Verification_token');

afterEach(async () => {
    await User.deleteMany({});
    await Verification_token.deleteMany({});
});

afterAll(done => {
    // Close open connection in mongoose
    mongoose.connection.close();
    done();
});

describe("POST /register", () => {
    it("should register user and respond with a success message", async () => {
      const res = await request(app)
        .post("/users/register")
        .send({
          name: 'Test User',
          email: 'test@email.com',
          password: 'Test123!'
        });
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toBe("A verification email has been sent to test@email.com. It will expire after one day. If you did not get a verification email, click on resend verification email.");
      expect(res.statusCode).toBe(200);
  
      const response = await request(app).get("/users/all");
      expect(response.body.length).toBe(1);
    });
})