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

  var user = new User();
  user.name = 'Jane Smith';
  user.email = 'jane@email.com';
  user.setPassword('Jane123!');   
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

describe('GET users/all', () => {
  it('should get all users', async () => {
    const res = await request(app)
      .get('/users/all')
    expect(res.body.length).toBe(2);
    expect(res.body[0]).toHaveProperty("_id");
    expect(res.body[0]).toHaveProperty("name");
    expect(res.body[0]).toHaveProperty("email");
    expect(res.body[0]).toHaveProperty("salt");
    expect(res.body[0]).toHaveProperty("hash");
    expect(res.body[0]).toHaveProperty("isVerified");
    expect(res.statusCode).toBe(200);
  })
})

describe('GET users/all?search', () => {
  it('should get user John Doe', async () => {
    const res = await request(app)
      .get('/users/all?search=John Doe')
    expect(res.body.length).toBe(1);
    expect(res.body[0]).toHaveProperty("_id");
    expect(res.body[0].name).toBe("John Doe");
    expect(res.statusCode).toBe(200);
  })
})

describe("POST /user", () => {
  it("should respond with a success message", async () => {
    const res = await request(app)
      .post("/users/add")
      .send({
        name: 'Test User',
        email: 'test@email.com',
        password: 'Test123!'
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("User created successfully");
    expect(res.statusCode).toBe(200);

    const response = await request(app).get("/users/all");
    expect(response.body.length).toBe(3);
  });
});

describe("PUT /users/update/:id", () => {
  it("should respond with old user", async () => {
    const user = await User.findOne({name: 'John Doe'});
    const oldUser = await request(app)
      .put(`/users/update/${user._id}`)
      .send({ name: "Test Name", email: 'test@email.com', newPassword: ''});
    expect(oldUser.body.name).toBe('John Doe');
    expect(oldUser.statusCode).toBe(200);

    const response = await request(app).get("/users/all");
    expect(response.body.length).toBe(2);

    const newUser = await request(app).get("/users/all?search=Test Name");
    expect(newUser.body[0].name).toBe('Test Name');
    expect(newUser.body[0].email).toBe('test@email.com');
    expect(oldUser.body.hash).toBe(newUser.body[0].hash);
    expect(newUser.body.length).toBe(1);
  });
});

describe("DELETE /users/delete/:id", () => {
  it("should respond with a message of Deleted", async () => {
    const user = await User.findOne({name: 'John Doe'});
    const removedUser = await request(app).delete(
      `/users/delete/${user._id}`
    );
    expect(removedUser.body.deletedCount).toBe(1);
    expect(removedUser.statusCode).toBe(200);

    const response = await request(app).get("/users/all");
    expect(response.body.length).toBe(1);
  });
});