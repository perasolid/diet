const request = require('supertest')
require('./config/testConfig')

const app = require('../app')

const User = mongoose.model('User');
const Verification_token = mongoose.model('Verification_token');
const Dri = mongoose.model('Dri');

const jwt = require('jsonwebtoken');

afterEach(async () => {
  await User.deleteMany({});
  await Verification_token.deleteMany({});
  await Dri.deleteMany({});
});

afterAll(done => {
  // Close open connection in mongoose
  mongoose.connection.close();
  done();
});

describe("GET /profile", () => {
  it("should respond 401 Unauthorized", async () => {
    const res = await request(app)
      .get("/users/profile")
    expect(res.statusCode).toBe(401);
  });
})

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
      expect(decoded.email).toBe("john@email.com");
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

describe("POST /resend-verification-email", () => {
  it("should respond with a 200 success message", async () => { 
    let verificationToken = new Verification_token();
    verificationToken.email = 'test@email.com';
    verificationToken.token = 'sometoken';
    await verificationToken.save();
    
    const res = await request(app)
      .post("/users/resend-verification-email")
      .send({
        email: 'test@email.com'
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("A verification email has been resent to test@email.com.");
    expect(res.statusCode).toBe(200);
  });

  it("should respond with a 404 Not Found", async () => {   
    const res = await request(app)
      .post("/users/resend-verification-email")
      .send({
        email: 'noverification@email.com'
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("No verification token for this email.");
    expect(res.statusCode).toBe(404);
  });
})

describe("GET /verifyAccount", () => {
  it("should respond with a 200", async () => {
    var user = new User();
    user.name = 'John Doe';
    user.email = 'john@email.com';
    user.setPassword('John123!');   
    let insertedUser = await user.save();

    var infoForToken = { "id": insertedUser._id }
    const token = jwt.sign(infoForToken, process.env.SECRET, { expiresIn: '1d' });

    let verificationToken = new Verification_token();
    verificationToken.email = 'john@email.com';
    verificationToken.token = token;
    await verificationToken.save();
    
    const res = await request(app)
      .get(`/users/verifyAccount?id=${token}`)

    expect(res.statusCode).toBe(200);

    let verifiedUser = await User.findOne({email: 'john@email.com'});
    expect(verifiedUser.isVerified).toBe(true);
  });

  it("should respond with a 200 account already verified", async () => {
    var user = new User();
    user.name = 'John Doe';
    user.email = 'john@email.com';
    user.setPassword('John123!');   
    let insertedUser = await user.save();

    var infoForToken = { "id": insertedUser._id }
    const token = jwt.sign(infoForToken, process.env.SECRET, { expiresIn: '1d' });

    let verificationToken = new Verification_token();
    verificationToken.email = 'john@email.com';
    verificationToken.token = token;
    await verificationToken.save();
    
    const res = await request(app)
      .get(`/users/verifyAccount?id=${token}`)

    const secondRes = await request(app)
      .get(`/users/verifyAccount?id=${token}`)

    expect(secondRes.statusCode).toBe(200);
    expect(secondRes.body).toHaveProperty("message");
    expect(secondRes.body.message).toBe("Account is already verified.");

    let verifiedUser = await User.findOne({email: 'john@email.com'});
    expect(verifiedUser.isVerified).toBe(true);
  });

  it("should respond with a 404 user does not exist", async () => {
    var infoForToken = { "id": "61e5c51c7a1fa80016a74b1d" }
    const token = jwt.sign(infoForToken, process.env.SECRET, { expiresIn: '1d' });
    
    const res = await request(app)
      .get(`/users/verifyAccount?id=${token}`)

    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("User does not exist.");
  });
})