const request = require('supertest')
require('./config/testConfig')

const app = require('../app')

var User_nutrition = mongoose.model('User_nutrition');

beforeEach(async () => {
  // seed with some data
  var user_nutrition = new User_nutrition();
  user_nutrition.quantity = 35;
  user_nutrition.date_of_consumption = "2022-03-19T11:00:00.000Z";
  user_nutrition.user_id = "61e5c51c7a1fa80016a74b1d";
  user_nutrition.nutrition_id = "61e9a608407e9d84bb768ce7";
  await user_nutrition.save();

  var user_nutrition = new User_nutrition();
  user_nutrition.quantity = 50;
  user_nutrition.date_of_consumption = "2022-03-19T11:00:00.000Z";
  user_nutrition.user_id = "66b5c51c7a1fa80016a74aaa";
  user_nutrition.nutrition_id = "75a9a608407e9d84bb768bc8";
  await user_nutrition.save();
});

afterEach(async () => {
  await User_nutrition.deleteMany({});
});

afterAll(done => {
  // Close open connection in mongoose
  mongoose.connection.close();
  done();
});

describe('GET user-nutrition/all', () => {
  it('should get all user-nutritions', async () => {
    const res = await request(app)
      .get('/user-nutrition/all')
    expect(res.body.length).toBe(2);
    expect(res.body[1]).toHaveProperty("_id");
    expect(res.body[1]).toHaveProperty("quantity");
    expect(res.body[1]).toHaveProperty("date_of_consumption");
    expect(res.body[1]).toHaveProperty("user_id");
    expect(res.body[1]).toHaveProperty("nutrition_id");
    expect(res.body[1].quantity).toBe(35);
    expect(res.body[1].user_id).toBe("61e5c51c7a1fa80016a74b1d");
    expect(res.statusCode).toBe(200);
  })
})

describe("POST /user-nutrition", () => {
  it("should respond with a success message", async () => {
    const res = await request(app)
      .post("/user-nutrition/add")
      .send({
        quantity: 150,
        date_of_consumption: "2022-03-21T11:00:00.000Z",
        user_id: "61e5c51c7a1fa80016a74b1d",
        nutrition_id: "61e9a608407e9d84bb768ce7"
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Successfully added food to diet!");
    expect(res.statusCode).toBe(200);

    const response = await request(app).get("/user-nutrition/all");
    expect(response.body.length).toBe(3);
  });

  it("should respond with a Bad Request message", async () => {
    const res = await request(app)
      .post("/user-nutrition/add")
      .send({
        quantity: 150,
        date_of_consumption: "not a date",
        user_id: "61e5c51c7a1fa80016a74b1d",
        nutrition_id: "61e9a608407e9d84bb768ce7"
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe('User_nutrition validation failed: date_of_consumption: Cast to date failed for value "not a date" at path "date_of_consumption"');
    expect(res.statusCode).toBe(400);

    const response = await request(app).get("/user-nutrition/all");
    expect(response.body.length).toBe(2);
  });
})

describe("PUT /user-nutrition/update/:id", () => {
  it("should respond with 200 OK", async () => {
    const userNutrition = await User_nutrition.findOne({user_id: '61e5c51c7a1fa80016a74b1d'});
    const res = await request(app)
      .put(`/user-nutrition/update/${userNutrition._id}`)
      .send({ 
        quantity: 80,
        date_of_consumption: "2022-03-19T11:00:00.000Z",
        user_id: "61e5c51c7a1fa80016a74b1d",
        nutrition_id: "61e9a608407e9d84bb768ce7"
      });
    expect(res.statusCode).toBe(200);

    const response = await request(app).get("/user-nutrition/all");
    expect(response.body.length).toBe(2);

    const updatedUserNutrition = await User_nutrition.findOne({user_id: '61e5c51c7a1fa80016a74b1d'});
    expect(updatedUserNutrition.quantity).toBe(80);
    expect(updatedUserNutrition._id).toStrictEqual(userNutrition._id);
    expect(updatedUserNutrition.user_id).toStrictEqual(userNutrition.user_id);
    expect(updatedUserNutrition.nutrition_id).toStrictEqual(userNutrition.nutrition_id);
    expect(updatedUserNutrition.date_of_consumption).toStrictEqual(userNutrition.date_of_consumption);
  });

  it("should respond with 400", async () => {
    const res = await request(app)
      .put(`/user-nutrition/update/thisDoesNotPassAsId`)
      .send({})
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Invalid user-nutrition id format");

    const response = await request(app).get("/user-nutrition/all");
    expect(response.body.length).toBe(2);
});
})

describe("DELETE /user-nutrition/delete/:id", () => {
  it("should respond with a message of Deleted", async () => {
    const userNutrition = await User_nutrition.findOne({user_id: '61e5c51c7a1fa80016a74b1d'});
    const res = await request(app).delete(
      `/user-nutrition/delete/${userNutrition._id}`
    );
    expect(res.body.deletedCount).toBe(1);
    expect(res.statusCode).toBe(200);

    const response = await request(app).get("/user-nutrition/all");
    expect(response.body.length).toBe(1);
  });

  it("should catch invalid nutrition id query parameter", async () => {
    const res = await request(app).delete(
      `/user-nutrition/delete/notValidQueryParameter`
    );
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Invalid user-nutrition id format");

    const response = await request(app).get("/user-nutrition/all");
    expect(response.body.length).toBe(2);
  });
});
