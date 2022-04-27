const request = require('supertest');
require('./config/test-config');
const app = require('../app');
const jwt = require('jsonwebtoken');

const UserNutrition = mongoose.model('User_nutrition');
const Nutrition = mongoose.model('Nutrition');

const firstUserNutrition = {
  quantity: 35,
  date_of_consumption: "2022-03-19T11:00:00.000Z",
  user_id: "61e5c51c7a1fa80016a74b1d",
  nutrition_id: "61e9a608407e9d84bb768ce7"
};

const secondtUserNutrition = {
  quantity: 50,
  date_of_consumption: "2022-03-19T11:00:00.000Z",
  user_id: "66b5c51c7a1fa80016a74aaa",
  nutrition_id: "75a9a608407e9d84bb768bc8"
};

let userToken;
let adminToken;

beforeAll(async () => {
  userToken = jwt.sign({ "role": "user" }, process.env.SECRET, { expiresIn: '1d' });
  adminToken = jwt.sign({ "role": "admin" }, process.env.SECRET, { expiresIn: '1d' });
});

beforeEach(async () => {
  // seed with some data
  let userNutritionOne = new UserNutrition(firstUserNutrition);
  await userNutritionOne.save();

  let userNutritionTwo = new UserNutrition(secondtUserNutrition);
  await userNutritionTwo.save();
});

afterEach(async () => {
  await UserNutrition.deleteMany({});
  await Nutrition.deleteMany({});
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
      .set('Authorization', `Bearer ${adminToken}`)
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

describe('GET user-nutrition/get-user-nutritions', () => {
  it('should get all specific user-nutritions for user on exact date', async () => {
    const respnse = await request(app)
      .post("/nutritions/add")
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        _id: "61e9a608407e9d84bb768ce7", name: 'Test name', calories: 200, carbohydrate_g: 200, fiber_g: 200, protein_g: 200,
        total_fat_g: 200, saturated_fat_g: 200, fatty_acids_total_trans_g: 200, cholesterol_mg: 200,
        sugars_g: 200, water_g: 200, vitamin_a_rae_mcg: 200, thiamin_mg: 200, riboflavin_mg: 200,
        niacin_mg: 200, pantothenic_acid_mg: 200, vitamin_b6_mg: 200, folate_mcg: 200, vitamin_b12_mcg: 200,
        choline_mg: 200, vitamin_c_mg: 200, vitamin_d_IU: 200, vitamin_e_mg: 200, vitamin_k_mcg: 200,
        calcium_mg: 200, copper_mg: 200, irom_mg: 200, magnesium_mg: 200, manganese_mg: 200,
        phosphorous_mg: 200, potassium_mg: 200, selenium_mcg: 200, sodium_mg: 200, zink_mg: 200
      });

    const res = await request(app)
      .get(`/user-nutrition/get-user-nutritions?id=61e5c51c7a1fa80016a74b1d&date_of_consumption=2022-03-19T11:00:00.000Z`)
      .set('Authorization', `Bearer ${userToken}`)
    expect(res.body.length).toBe(1);
    expect(res.body[0]).toHaveProperty("_id");
    expect(res.body[0]).toHaveProperty("quantity");
    expect(res.body[0]).toHaveProperty("date_of_consumption");
    expect(res.body[0]).toHaveProperty("user_id");
    expect(res.body[0]).toHaveProperty("nutrition_id");
    expect(res.body[0]).toHaveProperty("nutrition");
    expect(res.body[0].quantity).toBe(35);
    expect(res.body[0].user_id).toBe("61e5c51c7a1fa80016a74b1d");
    expect(res.body[0].nutrition_id).toBe("61e9a608407e9d84bb768ce7");
    expect(res.body[0].date_of_consumption).toBe("2022-03-19T11:00:00.000Z");
    expect(res.body[0].nutrition._id).toBe("61e9a608407e9d84bb768ce7");
    expect(res.body[0].nutrition.calories).toBe(200);
    expect(res.statusCode).toBe(200);
  })
})

describe("POST /user-nutrition", () => {
  it("should respond with a success message", async () => {
    let userNutrition = Object.assign({}, firstUserNutrition);
    userNutrition.quantity = 150;
    userNutrition.date_of_consumption = "2022-03-21T11:00:00.000Z";
    const res = await request(app)
      .post("/user-nutrition/add")
      .set('Authorization', `Bearer ${userToken}`)
      .send(userNutrition);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Successfully added food to diet!");
    expect(res.statusCode).toBe(200);

    const response = await request(app)
      .get("/user-nutrition/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(3);
  });

  it("should respond with a Bad Request message", async () => {
    let userNutrition = Object.assign({}, firstUserNutrition);
    userNutrition.date_of_consumption = "not a date"
    const res = await request(app)
      .post("/user-nutrition/add")
      .set('Authorization', `Bearer ${userToken}`)
      .send(userNutrition);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe('User_nutrition validation failed: date_of_consumption: Cast to date failed for value "not a date" at path "date_of_consumption"');
    expect(res.statusCode).toBe(400);

    const response = await request(app)
      .get("/user-nutrition/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);
  });
})

describe("PUT /user-nutrition/update/:id", () => {
  it("should respond with 200 OK", async () => {
    let userNutrition = Object.assign({}, firstUserNutrition);
    userNutrition.quantity = 80;

    const existingUserNutrition = await UserNutrition.findOne({ user_id: '61e5c51c7a1fa80016a74b1d' });
    const res = await request(app)
      .put(`/user-nutrition/update/${existingUserNutrition._id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .send(userNutrition);
    expect(res.statusCode).toBe(200);

    const response = await request(app)
      .get("/user-nutrition/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);

    const updatedUserNutrition = await UserNutrition.findOne({ user_id: '61e5c51c7a1fa80016a74b1d' });
    expect(updatedUserNutrition.quantity).toBe(80);
    expect(updatedUserNutrition._id).toStrictEqual(existingUserNutrition._id);
    expect(updatedUserNutrition.user_id).toStrictEqual(existingUserNutrition.user_id);
    expect(updatedUserNutrition.nutrition_id).toStrictEqual(existingUserNutrition.nutrition_id);
    expect(updatedUserNutrition.date_of_consumption).toStrictEqual(existingUserNutrition.date_of_consumption);
  });

  it("should respond with 400", async () => {
    const res = await request(app)
      .put(`/user-nutrition/update/thisDoesNotPassAsId`)
      .set('Authorization', `Bearer ${userToken}`)
      .send({})
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Invalid user-nutrition id format");

    const response = await request(app)
      .get("/user-nutrition/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);
  });
})

describe("DELETE /user-nutrition/delete/:id", () => {
  it("should respond with a message of Deleted", async () => {
    const userNutrition = await UserNutrition.findOne({ user_id: '61e5c51c7a1fa80016a74b1d' });
    const res = await request(app)
      .delete(`/user-nutrition/delete/${userNutrition._id}`)
      .set('Authorization', `Bearer ${userToken}`)
    expect(res.body.deletedCount).toBe(1);
    expect(res.statusCode).toBe(200);

    const response = await request(app)
      .get("/user-nutrition/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(1);
  });

  it("should catch invalid nutrition id query parameter", async () => {
    const res = await request(app)
      .delete(`/user-nutrition/delete/notValidQueryParameter`)
      .set('Authorization', `Bearer ${userToken}`)
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Invalid user-nutrition id format");

    const response = await request(app)
      .get("/user-nutrition/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);
  });
})
