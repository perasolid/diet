const request = require('supertest')
require('./config/testConfig')

const app = require('../app')

var User = mongoose.model('User');
var Verification_token = mongoose.model('Verification_token');

const jwt = require('jsonwebtoken');

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

  it("should respond with a 400 and error message of email taken", async () => {
    var user = new User();
    user.name = 'John Doe';
    user.email = 'john@email.com';
    user.setPassword('John123!');   
    await user.save();
    const res = await request(app)
      .post("/users/register")
      .send({
        name: 'Test User',
        email: 'john@email.com',
        password: 'Test123!'
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Email taken");
    expect(res.statusCode).toBe(400);

    const response = await request(app).get("/users/all");
    expect(response.body.length).toBe(1);
  });

  it("should respond with a 400 and error message of all fields required", async () => {
    const res = await request(app)
      .post("/users/register")
      .send({
        name: 'Test User',
        password: 'Test123!'
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("All fields required");
    expect(res.statusCode).toBe(400);

    const response = await request(app).get("/users/all");
    expect(response.body.length).toBe(0);
  });
})

describe("POST /login", () => {
  it("should log in user and respond with a 200 token", async () => {
    var user = new User();
    user.name = 'John Doe';
    user.email = 'john@email.com';
    user.isVerified = true;
    user.setPassword('John123!');   
    await user.save();
    const res = await request(app)
      .post("/users/login")
      .send({
        email: 'john@email.com',
        password: 'John123!'
      });
    expect(res.body).toHaveProperty("token");
    try {
      const decoded = jwt.verify(res.body.token, process.env.SECRET);
      expect(decoded.email).toHaveProperty("john@email.com");
     }
     catch (ex) { console.log(ex.message); }
    expect(res.statusCode).toBe(200);


    const response = await request(app).get("/users/all");
    expect(response.body.length).toBe(1);
  });

  it("should not log in user and respond with a 401 Your Email has not been verified", async () => {
    var user = new User();
    user.name = 'John Doe';
    user.email = 'john@email.com';
    user.setPassword('John123!');   
    await user.save();
    const res = await request(app)
      .post("/users/login")
      .send({
        email: 'john@email.com',
        password: 'John123!'
      });
    expect(res.body).toHaveProperty("msg");
    expect(res.body.msg).toBe("Your Email has not been verified.");
    expect(res.statusCode).toBe(401);


    const response = await request(app).get("/users/all");
    expect(response.body.length).toBe(1);
  });

  it("should not log in user and respond with a 401 User not found", async () => {
    var user = new User();
    user.name = 'John Doe';
    user.email = 'john@email.com';
    user.isVerified = true;
    user.setPassword('John123!');   
    await user.save();
    const res = await request(app)
      .post("/users/login")
      .send({
        email: 'nosuch@email.com',
        password: 'John123!'
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("User not found");
    expect(res.statusCode).toBe(401);

    const response = await request(app).get("/users/all");
    expect(response.body.length).toBe(1);
  });

  it("should not log in user and respond with a 400 All fields required", async () => {
    var user = new User();
    user.name = 'John Doe';
    user.email = 'john@email.com';
    user.isVerified = true;
    user.setPassword('John123!');   
    await user.save();
    const res = await request(app)
      .post("/users/login")
      .send({
        password: 'John123!'
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("All fields required");
    expect(res.statusCode).toBe(400);
    
    const response = await request(app).get("/users/all");
    expect(response.body.length).toBe(1);
  });
})