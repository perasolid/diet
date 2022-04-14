const request = require('supertest');
require('./config/testConfig');

const app = require('../app');
const CompositeFood = mongoose.model('CompositeFood');
const Nutrition = mongoose.model('Nutrition');

let nutrition = {
  name: 'Test name', calories: 200, carbohydrate_g: 200, fiber_g: 200, protein_g: 200,
  total_fat_g: 200, saturated_fat_g: 200, fatty_acids_total_trans_g: 200, cholesterol_mg: 200,
  sugars_g: 200, water_g: 200, vitamin_a_rae_mcg: 200, thiamin_mg: 200, riboflavin_mg: 200,
  niacin_mg: 200, pantothenic_acid_mg: 200, vitamin_b6_mg: 200, folate_mcg: 200, vitamin_b12_mcg: 200,
  choline_mg: 200, vitamin_c_mg: 200, vitamin_d_IU: 200, vitamin_e_mg: 200, vitamin_k_mcg: 200,
  calcium_mg: 200, copper_mg: 200, irom_mg: 200, magnesium_mg: 200, manganese_mg: 200,
  phosphorous_mg: 200, potassium_mg: 200, selenium_mcg: 200, sodium_mg: 200, zink_mg: 200
};

afterEach(async () => {
  await Nutrition.deleteMany({});
  await CompositeFood.deleteMany({});
});

afterAll(done => {
  // Close open connection in mongoose
  mongoose.connection.close();
  done();
});

describe("POST /composite-food", () => {
  it("should respond with a success message", async () => {
    const res = await request(app)
      .post("/composite-food/add")
      .send({
        calculatedNutrition: nutrition,
        ingredients: [
          {
            ingredient_id: '61e9a608407e9d84bb768ce7',
            ingredient_ratio: 0.4
          },
          {
            ingredient_id: '61e9a608407e9d84bb768ce8',
            ingredient_ratio: 0.6
          }
        ]

      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Created composite food!");
    expect(res.statusCode).toBe(200);

    const response = await request(app)
      .get("/nutritions/all");
    expect(response.body.length).toBe(1);
    expect(response.body[0].name).toBe("Test name");

    const ingredients = await CompositeFood.find({});
    expect(ingredients.length).toBe(2);
  });
})

describe("POST /composite-food", () => {
  it("should respond with a error message", async () => {
    let wrongNutritionValues = Object.assign({}, nutrition);
    delete wrongNutritionValues.name;
    delete wrongNutritionValues.calories;

    const res = await request(app)
      .post("/composite-food/add")
      .send({
        calculatedNutrition: wrongNutritionValues,
        ingredients: [
          {
            ingredient_id: '61e9a608407e9d84bb768ce7',
            ingredient_ratio: 0.4
          },
          {
            ingredient_id: '61e9a608407e9d84bb768ce8',
            ingredient_ratio: 0.6
          }
        ]

      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Something went wrong while creating composite food");
    expect(res.statusCode).toBe(500);
  });
})

describe("POST /composite-food", () => {
  it("should respond with a error message", async () => {
    const res = await request(app)
      .post("/composite-food/add")
      .send({
        calculatedNutrition: nutrition,
        ingredients: [
          {
            ingredient_ratio: 0.4
          },
          {
            ingredient_ratio: 0.6
          }
        ]

      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Something went wrong while creating ingredients");
    expect(res.statusCode).toBe(500);
  });
})