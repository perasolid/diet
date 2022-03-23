const request = require('supertest')
require('./config/testConfig')

const app = require('../app')

var User_nutrition = mongoose.model('User_nutrition');
var Nutrition = mongoose.model('Nutrition');

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
    .send({
      _id: "61e9a608407e9d84bb768ce7", name: 'Test name',calories: 200, carbohydrate_g: 200, fiber_g: 200, protein_g: 200,
      total_fat_g: 200, saturated_fat_g: 200, fatty_acids_total_trans_g: 200, cholesterol_mg: 200,
      sugars_g: 200,water_g: 200, vitamin_a_rae_mcg: 200, thiamin_mg: 200, riboflavin_mg: 200,
      niacin_mg: 200, pantothenic_acid_mg: 200, vitamin_b6_mg: 200, folate_mcg: 200, vitamin_b12_mcg: 200,
      choline_mg: 200, vitamin_c_mg: 200, vitamin_d_IU: 200, vitamin_e_mg: 200, vitamin_k_mcg: 200,
      calcium_mg: 200, copper_mg: 200, irom_mg: 200, magnesium_mg: 200, manganese_mg: 200,
      phosphorous_mg: 200, potassium_mg: 200, selenium_mcg: 200, sodium_mg: 200, zink_mg: 200
    });

    const res = await request(app)
      .get(`/user-nutrition/get-user-nutritions?id=61e5c51c7a1fa80016a74b1d&date_of_consumption=2022-03-19T11:00:00.000Z`)
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
