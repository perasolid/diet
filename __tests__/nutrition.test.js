const request = require('supertest')
require('./config/testConfig')

const app = require('../app')

var Nutrition = mongoose.model('Nutrition');

beforeEach(async () => {
  // seed with some data
  var nutrition = new Nutrition();
  nutrition.name = 'Apples';
  nutrition.calories = 100;
  nutrition.carbohydrate_g = 100;
  nutrition.fiber_g = 100;
  nutrition.protein_g = 100;
  nutrition.total_fat_g = 100;
  nutrition.saturated_fat_g = 100;
  nutrition.fatty_acids_total_trans_g = 100;
  nutrition.cholesterol_mg = 100;
  nutrition.sugars_g = 100;
  nutrition.water_g = 100;
  nutrition.vitamin_a_rae_mcg = 100;
  nutrition.thiamin_mg = 100;
  nutrition.riboflavin_mg = 100;
  nutrition.niacin_mg = 100;
  nutrition.pantothenic_acid_mg = 100;
  nutrition.vitamin_b6_mg = 100;
  nutrition.folate_mcg = 100;
  nutrition.vitamin_b12_mcg = 100;
  nutrition.choline_mg = 100;
  nutrition.vitamin_c_mg = 100;
  nutrition.vitamin_d_IU = 100;
  nutrition.vitamin_e_mg = 100;
  nutrition.vitamin_k_mcg = 100;
  nutrition.calcium_mg = 100;
  nutrition.copper_mg = 100;
  nutrition.irom_mg = 100;
  nutrition.magnesium_mg = 100;
  nutrition.manganese_mg = 100;
  nutrition.phosphorous_mg = 100;
  nutrition.potassium_mg = 100;
  nutrition.selenium_mcg = 100;
  nutrition.sodium_mg = 100;
  nutrition.zink_mg = 100;
  await nutrition.save();
});
  
afterEach(async () => {
  await Nutrition.deleteMany({});
});

afterAll(done => {
  // Close open connection in mongoose
  mongoose.connection.close();
  done();
});

describe('GET nutritions/all', () => {
  it('should get all nutritions', async () => {
    const res = await request(app)
      .get('/nutritions/all')
    expect(res.body.length).toBe(1);
    expect(res.body[0]).toHaveProperty("_id");
    expect(res.body[0]).toHaveProperty("name");
    expect(res.body[0]).toHaveProperty("calories");
    expect(res.body[0]).toHaveProperty("carbohydrate_g");
    expect(res.body[0].name).toBe('Apples');
    expect(res.body[0].calories).toBe(100);
    expect(res.statusCode).toBe(200);
  })
})

describe('GET nutritions/getNutritionsNameAndId', () => {
  it('should get all nutritions with just _id and name', async () => {
    const res = await request(app)
      .get('/nutritions/getNutritionsNameAndId')
    expect(res.body.length).toBe(1);
    expect(res.body[0]).toHaveProperty("_id");
    expect(res.body[0]).toHaveProperty("name");
    expect(res.body[0].name).toBe('Apples');
    expect(res.body[0]).not.toHaveProperty("calories");
    expect(res.body[0]).not.toHaveProperty("carbohydrate_g");
    expect(res.statusCode).toBe(200);
  })

  it('should get nutritions that contain all search words split by space', async () => {
    const res = await request(app)
      .get('/nutritions/getNutritionsNameAndId?search=apples')
    expect(res.body.length).toBe(1);
    expect(res.body[0]).toHaveProperty("_id");
    expect(res.body[0]).toHaveProperty("name");
    expect(res.body[0].name).toBe('Apples');
    expect(res.body[0]).not.toHaveProperty("calories");
    expect(res.body[0]).not.toHaveProperty("carbohydrate_g");
    expect(res.statusCode).toBe(200);
  })
})

describe('GET nutritions/withPagination', () => {
  it('should get specified nutritions based on page and limit', async () => {
    const res = await request(app)
      .get('/nutritions/withPagination')
    expect(res.body.length).toBe(1);
    expect(res.body[0]).toHaveProperty("_id");
    expect(res.statusCode).toBe(200);
  })
})

describe('GET nutritions/numberOfNutritions', () => {
  it('should get total number of nutrition documents', async () => {
    const res = await request(app)
      .get('/nutritions/numberOfNutritions')
    expect(res.body).toHaveProperty("numberOfNutritions");
    expect(res.body.numberOfNutritions).toBe(1);
    expect(res.statusCode).toBe(200);
  })
})

describe("POST /nutritions", () => {
  it("should respond with a success message", async () => {
    const res = await request(app)
      .post("/nutritions/add")
      .send({
        name: 'Test name',calories: 200, carbohydrate_g: 200, fiber_g: 200, protein_g: 200,
        total_fat_g: 200, saturated_fat_g: 200, fatty_acids_total_trans_g: 200, cholesterol_mg: 200,
        sugars_g: 200,water_g: 200, vitamin_a_rae_mcg: 200, thiamin_mg: 200, riboflavin_mg: 200,
        niacin_mg: 200, pantothenic_acid_mg: 200, vitamin_b6_mg: 200, folate_mcg: 200, vitamin_b12_mcg: 200,
        choline_mg: 200, vitamin_c_mg: 200, vitamin_d_IU: 200, vitamin_e_mg: 200, vitamin_k_mcg: 200,
        calcium_mg: 200, copper_mg: 200, irom_mg: 200, magnesium_mg: 200, manganese_mg: 200,
        phosphorous_mg: 200, potassium_mg: 200, selenium_mcg: 200, sodium_mg: 200, zink_mg: 200
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Test name successfully created!");
    expect(res.statusCode).toBe(200);

    const response = await request(app).get("/nutritions/all");
    expect(response.body.length).toBe(2);
  });
})

describe('POST nutritions/add', () => {
  it('should respond with missing name field message', async () => {
    const res = await request(app)
      .post('/nutritions/add')
      .send({
        calories: 200, carbohydrate_g: 200, fiber_g: 200, protein_g: 200,
        total_fat_g: 200, saturated_fat_g: 200, fatty_acids_total_trans_g: 200, cholesterol_mg: 200,
        sugars_g: 200,water_g: 200, vitamin_a_rae_mcg: 200, thiamin_mg: 200, riboflavin_mg: 200,
        niacin_mg: 200, pantothenic_acid_mg: 200, vitamin_b6_mg: 200, folate_mcg: 200, vitamin_b12_mcg: 200,
        choline_mg: 200, vitamin_c_mg: 200, vitamin_d_IU: 200, vitamin_e_mg: 200, vitamin_k_mcg: 200,
        calcium_mg: 200, copper_mg: 200, irom_mg: 200, magnesium_mg: 200, manganese_mg: 200,
        phosphorous_mg: 200, potassium_mg: 200, selenium_mcg: 200, sodium_mg: 200, zink_mg: 200
      })
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Nutrition validation failed: name: Path `name` is required.");
    expect(res.statusCode).toBe(400);

    const response = await request(app).get("/nutritions/all");
    expect(response.body.length).toBe(1);
  })
})

describe("PUT /nutritions/update/:id", () => {
  it("should respond with 200 OK", async () => {
    const nutrition = await Nutrition.findOne({name: 'Apples'});
    nutrition.name = 'Updated name';
    const res = await request(app)
      .put(`/nutritions/update/${nutrition._id}`)
      .send({
          name: 'Updated name', calories: 300, carbohydrate_g: 200, fiber_g: 200, protein_g: 200,
          total_fat_g: 200, saturated_fat_g: 200, fatty_acids_total_trans_g: 200, cholesterol_mg: 200,
          sugars_g: 200,water_g: 200, vitamin_a_rae_mcg: 200, thiamin_mg: 200, riboflavin_mg: 200,
          niacin_mg: 200, pantothenic_acid_mg: 200, vitamin_b6_mg: 200, folate_mcg: 200, vitamin_b12_mcg: 200,
          choline_mg: 200, vitamin_c_mg: 200, vitamin_d_IU: 200, vitamin_e_mg: 200, vitamin_k_mcg: 200,
          calcium_mg: 200, copper_mg: 200, irom_mg: 200, magnesium_mg: 200, manganese_mg: 200,
          phosphorous_mg: 200, potassium_mg: 200, selenium_mcg: 200, sodium_mg: 200, zink_mg: 200
        })
    expect(res.statusCode).toBe(200);

    const response = await request(app).get("/nutritions/all");
    expect(response.body.length).toBe(1);

    const newUser = await request(app).get("/nutritions/all?search=Updated name");
    expect(newUser.body[0].name).toBe('Updated name');
    expect(newUser.body[0].calories).toBe(300);
    expect(newUser.body.length).toBe(1);
  });

  it("should respond with 400", async () => {
      const res = await request(app)
        .put(`/nutritions/update/thisDoesNotPassAsId`)
        .send({})
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toBe("Invalid nutrition id format");
  
      const response = await request(app).get("/nutritions/all");
      expect(response.body.length).toBe(1);
  });
})

describe("DELETE /nutritions/delete/:id", () => {
  it("should respond with a message of deleted", async () => {
    const nutrition = await Nutrition.findOne({name: 'Apples'});
    const res = await request(app).delete(
      `/nutritions/delete/${nutrition._id}`
    );
    expect(res.body.deletedCount).toBe(1);
    expect(res.statusCode).toBe(200);

    const response = await request(app).get("/nutritions/all");
    expect(response.body.length).toBe(0);
  });

  it("should catch invalid nutrition id query parameter", async () => {
    const res = await request(app).delete(
      `/nutritions/delete/notValidQueryParameter`
    );
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Invalid nutrition id format");

    const response = await request(app).get("/nutritions/all");
    expect(response.body.length).toBe(1);
  });
});