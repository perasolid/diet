const request = require('supertest')
require('./config/testConfig')

const app = require('../app')

var Dri = mongoose.model('Dri');

beforeEach(async () => {
  // seed with some data
  var dri = new Dri();
  dri.user_id = '61e5c51c7a1fa80016a74b1d';
  dri.active = true;
  dri.name = 'Detox';
  dri.calories = 100;
  dri.carbohydrate_g = 100;
  dri.fiber_g = 100;
  dri.protein_g = 100;
  dri.total_fat_g = 100;
  dri.saturated_fat_g = 100;
  dri.fatty_acids_total_trans_g = 100;
  dri.cholesterol_mg = 100;
  dri.sugars_g = 100;
  dri.water_g = 100;
  dri.vitamin_a_rae_mcg = 100;
  dri.thiamin_mg = 100;
  dri.riboflavin_mg = 100;
  dri.niacin_mg = 100;
  dri.pantothenic_acid_mg = 100;
  dri.vitamin_b6_mg = 100;
  dri.folate_mcg = 100;
  dri.vitamin_b12_mcg = 100;
  dri.choline_mg = 100;
  dri.vitamin_c_mg = 100;
  dri.vitamin_d_IU = 100;
  dri.vitamin_e_mg = 100;
  dri.vitamin_k_mcg = 100;
  dri.calcium_mg = 100;
  dri.copper_mg = 100;
  dri.irom_mg = 100;
  dri.magnesium_mg = 100;
  dri.manganese_mg = 100;
  dri.phosphorous_mg = 100;
  dri.potassium_mg = 100;
  dri.selenium_mcg = 100;
  dri.sodium_mg = 100;
  dri.zink_mg = 100;
  dri.calories_max = 200;
  dri.carbohydrate_g_max = 200;
  dri.fiber_g_max = 200;
  dri.protein_g_max = 200;
  dri.total_fat_g_max = 200;
  dri.saturated_fat_g_max = 200;
  dri.fatty_acids_total_trans_g_max = 200;
  dri.cholesterol_mg_max = 200;
  dri.sugars_g_max = 200;
  dri.water_g_max = 200;
  dri.vitamin_a_rae_mcg_max = 200;
  dri.thiamin_mg_max = 200;
  dri.riboflavin_mg_max = 200;
  dri.niacin_mg_max = 200;
  dri.pantothenic_acid_mg_max = 200;
  dri.vitamin_b6_mg_max = 200;
  dri.folate_mcg_max = 200;
  dri.vitamin_b12_mcg_max = 200;
  dri.choline_mg_max = 200;
  dri.vitamin_c_mg_max = 200;
  dri.vitamin_d_IU_max = 200;
  dri.vitamin_e_mg_max = 200;
  dri.vitamin_k_mcg_max = 200;
  dri.calcium_mg_max = 200;
  dri.copper_mg_max = 200;
  dri.irom_mg_max = 200;
  dri.magnesium_mg_max = 200;
  dri.manganese_mg_max = 200;
  dri.phosphorous_mg_max = 200;
  dri.potassium_mg_max = 200;
  dri.selenium_mcg_max = 200;
  dri.sodium_mg_max = 200;
  dri.zink_mg_max = 200;
  await dri.save();

  var dri = new Dri();
  dri.user_id = '61e5c51c7a1fa80016a74b1d';
  dri.active = false;
  dri.name = 'Protein';
  dri.calories = 100;
  dri.carbohydrate_g = 100;
  dri.fiber_g = 100;
  dri.protein_g = 100;
  dri.total_fat_g = 100;
  dri.saturated_fat_g = 100;
  dri.fatty_acids_total_trans_g = 100;
  dri.cholesterol_mg = 100;
  dri.sugars_g = 100;
  dri.water_g = 100;
  dri.vitamin_a_rae_mcg = 100;
  dri.thiamin_mg = 100;
  dri.riboflavin_mg = 100;
  dri.niacin_mg = 100;
  dri.pantothenic_acid_mg = 100;
  dri.vitamin_b6_mg = 100;
  dri.folate_mcg = 100;
  dri.vitamin_b12_mcg = 100;
  dri.choline_mg = 100;
  dri.vitamin_c_mg = 100;
  dri.vitamin_d_IU = 100;
  dri.vitamin_e_mg = 100;
  dri.vitamin_k_mcg = 100;
  dri.calcium_mg = 100;
  dri.copper_mg = 100;
  dri.irom_mg = 100;
  dri.magnesium_mg = 100;
  dri.manganese_mg = 100;
  dri.phosphorous_mg = 100;
  dri.potassium_mg = 100;
  dri.selenium_mcg = 100;
  dri.sodium_mg = 100;
  dri.zink_mg = 100;
  dri.calories_max = 200;
  dri.carbohydrate_g_max = 200;
  dri.fiber_g_max = 200;
  dri.protein_g_max = 200;
  dri.total_fat_g_max = 200;
  dri.saturated_fat_g_max = 200;
  dri.fatty_acids_total_trans_g_max = 200;
  dri.cholesterol_mg_max = 200;
  dri.sugars_g_max = 200;
  dri.water_g_max = 200;
  dri.vitamin_a_rae_mcg_max = 200;
  dri.thiamin_mg_max = 200;
  dri.riboflavin_mg_max = 200;
  dri.niacin_mg_max = 200;
  dri.pantothenic_acid_mg_max = 200;
  dri.vitamin_b6_mg_max = 200;
  dri.folate_mcg_max = 200;
  dri.vitamin_b12_mcg_max = 200;
  dri.choline_mg_max = 200;
  dri.vitamin_c_mg_max = 200;
  dri.vitamin_d_IU_max = 200;
  dri.vitamin_e_mg_max = 200;
  dri.vitamin_k_mcg_max = 200;
  dri.calcium_mg_max = 200;
  dri.copper_mg_max = 200;
  dri.irom_mg_max = 200;
  dri.magnesium_mg_max = 200;
  dri.manganese_mg_max = 200;
  dri.phosphorous_mg_max = 200;
  dri.potassium_mg_max = 200;
  dri.selenium_mcg_max = 200;
  dri.sodium_mg_max = 200;
  dri.zink_mg_max = 200;
  await dri.save();
});
  
afterEach(async () => {
  await Dri.deleteMany({});
});

afterAll(done => {
  // Close open connection in mongoose
  mongoose.connection.close();
  done();
});

describe('GET dri/all', () => {
  it('should get all dris', async () => {
    const res = await request(app)
      .get('/dri/all')
    expect(res.body.length).toBe(2);
    expect(res.body[1]).toHaveProperty("_id");
    expect(res.body[1]).toHaveProperty("name");
    expect(res.body[1]).toHaveProperty("calories");
    expect(res.body[1]).toHaveProperty("calories_max");
    expect(res.body[1].name).toBe('Detox');
    expect(res.body[1].calories).toBe(100);
    expect(res.body[1].calories_max).toBe(200);
    expect(res.statusCode).toBe(200);
  })
})

describe('GET user specific dris', () => {
    it('should get all specific user dris', async () => {
        const res = await request(app)
            .get('/dri/user-dris/61e5c51c7a1fa80016a74b1d')
        expect(res.body.length).toBe(2);
        expect(res.body[0]).toHaveProperty("_id");
        expect(res.body[0]).toHaveProperty("name");
        expect(res.body[0]).toHaveProperty("calories");
        expect(res.body[0]).toHaveProperty("calories_max");
        expect(res.body[0].name).toBe('Detox');
        expect(res.body[0].calories).toBe(100);
        expect(res.body[0].calories_max).toBe(200);
        expect(res.statusCode).toBe(200);
    })
})

describe('GET user active dris', () => {
    it('should get active user dris', async () => {
        const res = await request(app)
            .get('/dri/user-active-dri/61e5c51c7a1fa80016a74b1d')
        expect(res.body.length).toBe(1);
        expect(res.body[0]).toHaveProperty("_id");
        expect(res.body[0]).toHaveProperty("name");
        expect(res.body[0]).toHaveProperty("calories");
        expect(res.body[0]).toHaveProperty("calories_max");
        expect(res.body[0].name).toBe('Detox');
        expect(res.body[0].calories).toBe(100);
        expect(res.body[0].calories_max).toBe(200);
        expect(res.statusCode).toBe(200);
    })
})

describe("POST /dri/add", () => {
  it("should respond with a success message", async () => {
    const res = await request(app)
      .post("/dri/add")
      .send({
        user_id: '61e5c51c7a1fa80016a74b1d', active: true, name: 'Test POST', calories: 100, carbohydrate_g: 100, fiber_g: 100,
        protein_g: 100, total_fat_g: 100, saturated_fat_g: 100, fatty_acids_total_trans_g: 100, cholesterol_mg: 100, sugars_g: 100,
        water_g: 100, vitamin_a_rae_mcg: 100, thiamin_mg: 100, riboflavin_mg: 100, niacin_mg: 100, pantothenic_acid_mg: 100,
        vitamin_b6_mg: 100, folate_mcg: 100, vitamin_b12_mcg: 100, choline_mg: 100, vitamin_c_mg: 100, vitamin_d_IU: 100, vitamin_e_mg: 100,
        vitamin_k_mcg: 100, calcium_mg: 100, copper_mg: 100, irom_mg: 100, magnesium_mg: 100, manganese_mg: 100, phosphorous_mg: 100,
        potassium_mg: 100, selenium_mcg: 100, sodium_mg: 100, zink_mg: 100, calories_max: 200, carbohydrate_g_max: 200, fiber_g_max: 200,
        protein_g_max: 200, total_fat_g_max: 200, saturated_fat_g_max: 200, fatty_acids_total_trans_g_max: 200, cholesterol_mg_max: 200,
        sugars_g_max: 200, water_g_max: 200, vitamin_a_rae_mcg_max: 200, thiamin_mg_max: 200, riboflavin_mg_max: 200, niacin_mg_max: 200,
        pantothenic_acid_mg_max: 200, vitamin_b6_mg_max: 200, folate_mcg_max: 200, vitamin_b12_mcg_max: 200, choline_mg_max: 200, vitamin_c_mg_max: 200,
        vitamin_d_IU_max: 200, vitamin_e_mg_max: 200, vitamin_k_mcg_max: 200, calcium_mg_max: 200, copper_mg_max: 200, irom_mg_max: 200, magnesium_mg_max: 200,
        manganese_mg_max: 200, phosphorous_mg_max: 200, potassium_mg_max: 200, selenium_mcg_max: 200, sodium_mg_max: 200, zink_mg_max: 200
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Successfully created DRI!");
    expect(res.statusCode).toBe(200);

    const response = await request(app).get("/dri/all");
    expect(response.body.length).toBe(3);
  });

  it("should respond with a Bad Request message missing field", async () => {
    const res = await request(app)
      .post("/dri/add")
      .send({
        user_id: '61e5c51c7a1fa80016a74b1d', name: 'Test POST', calories: 100, carbohydrate_g: 100, fiber_g: 100,
        protein_g: 100, total_fat_g: 100, saturated_fat_g: 100, fatty_acids_total_trans_g: 100, cholesterol_mg: 100, sugars_g: 100,
        water_g: 100, vitamin_a_rae_mcg: 100, thiamin_mg: 100, riboflavin_mg: 100, niacin_mg: 100, pantothenic_acid_mg: 100,
        vitamin_b6_mg: 100, folate_mcg: 100, vitamin_b12_mcg: 100, choline_mg: 100, vitamin_c_mg: 100, vitamin_d_IU: 100, vitamin_e_mg: 100,
        vitamin_k_mcg: 100, calcium_mg: 100, copper_mg: 100, irom_mg: 100, magnesium_mg: 100, manganese_mg: 100, phosphorous_mg: 100,
        potassium_mg: 100, selenium_mcg: 100, sodium_mg: 100, zink_mg: 100, calories_max: 200, carbohydrate_g_max: 200, fiber_g_max: 200,
        protein_g_max: 200, total_fat_g_max: 200, saturated_fat_g_max: 200, fatty_acids_total_trans_g_max: 200, cholesterol_mg_max: 200,
        sugars_g_max: 200, water_g_max: 200, vitamin_a_rae_mcg_max: 200, thiamin_mg_max: 200, riboflavin_mg_max: 200, niacin_mg_max: 200,
        pantothenic_acid_mg_max: 200, vitamin_b6_mg_max: 200, folate_mcg_max: 200, vitamin_b12_mcg_max: 200, choline_mg_max: 200, vitamin_c_mg_max: 200,
        vitamin_d_IU_max: 200, vitamin_e_mg_max: 200, vitamin_k_mcg_max: 200, calcium_mg_max: 200, copper_mg_max: 200, irom_mg_max: 200, magnesium_mg_max: 200,
        manganese_mg_max: 200, phosphorous_mg_max: 200, potassium_mg_max: 200, selenium_mcg_max: 200, sodium_mg_max: 200, zink_mg_max: 200
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe('Dri validation failed: active: Path `active` is required.');
    expect(res.statusCode).toBe(400);

    const response = await request(app).get("/dri/all");
    expect(response.body.length).toBe(2);
  });

  it("should respond with a Bad Request message max value greater than min calories", async () => {
    const res = await request(app)
      .post("/dri/add")
      .send({
        user_id: '61e5c51c7a1fa80016a74b1d', active: true, name: 'Test POST', calories: 500, carbohydrate_g: 100, fiber_g: 100,
        protein_g: 100, total_fat_g: 100, saturated_fat_g: 100, fatty_acids_total_trans_g: 100, cholesterol_mg: 100, sugars_g: 100,
        water_g: 100, vitamin_a_rae_mcg: 100, thiamin_mg: 100, riboflavin_mg: 100, niacin_mg: 100, pantothenic_acid_mg: 100,
        vitamin_b6_mg: 100, folate_mcg: 100, vitamin_b12_mcg: 100, choline_mg: 100, vitamin_c_mg: 100, vitamin_d_IU: 100, vitamin_e_mg: 100,
        vitamin_k_mcg: 100, calcium_mg: 100, copper_mg: 100, irom_mg: 100, magnesium_mg: 100, manganese_mg: 100, phosphorous_mg: 100,
        potassium_mg: 100, selenium_mcg: 100, sodium_mg: 100, zink_mg: 100, calories_max: 200, carbohydrate_g_max: 200, fiber_g_max: 200,
        protein_g_max: 200, total_fat_g_max: 200, saturated_fat_g_max: 200, fatty_acids_total_trans_g_max: 200, cholesterol_mg_max: 200,
        sugars_g_max: 200, water_g_max: 200, vitamin_a_rae_mcg_max: 200, thiamin_mg_max: 200, riboflavin_mg_max: 200, niacin_mg_max: 200,
        pantothenic_acid_mg_max: 200, vitamin_b6_mg_max: 200, folate_mcg_max: 200, vitamin_b12_mcg_max: 200, choline_mg_max: 200, vitamin_c_mg_max: 200,
        vitamin_d_IU_max: 200, vitamin_e_mg_max: 200, vitamin_k_mcg_max: 200, calcium_mg_max: 200, copper_mg_max: 200, irom_mg_max: 200, magnesium_mg_max: 200,
        manganese_mg_max: 200, phosphorous_mg_max: 200, potassium_mg_max: 200, selenium_mcg_max: 200, sodium_mg_max: 200, zink_mg_max: 200
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe('Dri validation failed: calories_max: DRI must be less or equal to UI for calories');
    expect(res.statusCode).toBe(400);

    const response = await request(app).get("/dri/all");
    expect(response.body.length).toBe(2);
  });

  it("should respond with a Bad Request message, invalid user_id format", async () => {
    const res = await request(app)
      .post("/dri/add")
      .send({
        user_id: 'thisIsAInvalidId', active: true, name: 'Test POST', calories: 500, carbohydrate_g: 100, fiber_g: 100,
        protein_g: 100, total_fat_g: 100, saturated_fat_g: 100, fatty_acids_total_trans_g: 100, cholesterol_mg: 100, sugars_g: 100,
        water_g: 100, vitamin_a_rae_mcg: 100, thiamin_mg: 100, riboflavin_mg: 100, niacin_mg: 100, pantothenic_acid_mg: 100,
        vitamin_b6_mg: 100, folate_mcg: 100, vitamin_b12_mcg: 100, choline_mg: 100, vitamin_c_mg: 100, vitamin_d_IU: 100, vitamin_e_mg: 100,
        vitamin_k_mcg: 100, calcium_mg: 100, copper_mg: 100, irom_mg: 100, magnesium_mg: 100, manganese_mg: 100, phosphorous_mg: 100,
        potassium_mg: 100, selenium_mcg: 100, sodium_mg: 100, zink_mg: 100, calories_max: 200, carbohydrate_g_max: 200, fiber_g_max: 200,
        protein_g_max: 200, total_fat_g_max: 200, saturated_fat_g_max: 200, fatty_acids_total_trans_g_max: 200, cholesterol_mg_max: 200,
        sugars_g_max: 200, water_g_max: 200, vitamin_a_rae_mcg_max: 200, thiamin_mg_max: 200, riboflavin_mg_max: 200, niacin_mg_max: 200,
        pantothenic_acid_mg_max: 200, vitamin_b6_mg_max: 200, folate_mcg_max: 200, vitamin_b12_mcg_max: 200, choline_mg_max: 200, vitamin_c_mg_max: 200,
        vitamin_d_IU_max: 200, vitamin_e_mg_max: 200, vitamin_k_mcg_max: 200, calcium_mg_max: 200, copper_mg_max: 200, irom_mg_max: 200, magnesium_mg_max: 200,
        manganese_mg_max: 200, phosphorous_mg_max: 200, potassium_mg_max: 200, selenium_mcg_max: 200, sodium_mg_max: 200, zink_mg_max: 200
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe('Invalid user_id format for Dri creation');
    expect(res.statusCode).toBe(400);

    const response = await request(app).get("/dri/all");
    expect(response.body.length).toBe(2);
  });

  it("should respond with a Bad Request message, missing user_id", async () => {
    const res = await request(app)
      .post("/dri/add")
      .send({
        active: true, name: 'Test POST', calories: 500, carbohydrate_g: 100, fiber_g: 100,
        protein_g: 100, total_fat_g: 100, saturated_fat_g: 100, fatty_acids_total_trans_g: 100, cholesterol_mg: 100, sugars_g: 100,
        water_g: 100, vitamin_a_rae_mcg: 100, thiamin_mg: 100, riboflavin_mg: 100, niacin_mg: 100, pantothenic_acid_mg: 100,
        vitamin_b6_mg: 100, folate_mcg: 100, vitamin_b12_mcg: 100, choline_mg: 100, vitamin_c_mg: 100, vitamin_d_IU: 100, vitamin_e_mg: 100,
        vitamin_k_mcg: 100, calcium_mg: 100, copper_mg: 100, irom_mg: 100, magnesium_mg: 100, manganese_mg: 100, phosphorous_mg: 100,
        potassium_mg: 100, selenium_mcg: 100, sodium_mg: 100, zink_mg: 100, calories_max: 200, carbohydrate_g_max: 200, fiber_g_max: 200,
        protein_g_max: 200, total_fat_g_max: 200, saturated_fat_g_max: 200, fatty_acids_total_trans_g_max: 200, cholesterol_mg_max: 200,
        sugars_g_max: 200, water_g_max: 200, vitamin_a_rae_mcg_max: 200, thiamin_mg_max: 200, riboflavin_mg_max: 200, niacin_mg_max: 200,
        pantothenic_acid_mg_max: 200, vitamin_b6_mg_max: 200, folate_mcg_max: 200, vitamin_b12_mcg_max: 200, choline_mg_max: 200, vitamin_c_mg_max: 200,
        vitamin_d_IU_max: 200, vitamin_e_mg_max: 200, vitamin_k_mcg_max: 200, calcium_mg_max: 200, copper_mg_max: 200, irom_mg_max: 200, magnesium_mg_max: 200,
        manganese_mg_max: 200, phosphorous_mg_max: 200, potassium_mg_max: 200, selenium_mcg_max: 200, sodium_mg_max: 200, zink_mg_max: 200
      });
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe('Invalid user_id format for Dri creation');
    expect(res.statusCode).toBe(400);

    const response = await request(app).get("/dri/all");
    expect(response.body.length).toBe(2);
  });
})

describe("PUT /dri/update/:id", () => {
    it("should respond with 200 OK", async () => {
      const dri = await Dri.findOne({name: 'Detox'});
      dri.name = 'Updated name';
      const res = await request(app)
        .put(`/dri/update/${dri._id}`)
        .send({
            user_id: '61e5c51c7a1fa80016a74b1d', active: false,
            name: 'Updated name', calories: 200, carbohydrate_g: 200, fiber_g: 200, protein_g: 200,
            total_fat_g: 200, saturated_fat_g: 200, fatty_acids_total_trans_g: 200, cholesterol_mg: 200,
            sugars_g: 200,water_g: 200, vitamin_a_rae_mcg: 200, thiamin_mg: 200, riboflavin_mg: 200,
            niacin_mg: 200, pantothenic_acid_mg: 200, vitamin_b6_mg: 200, folate_mcg: 200, vitamin_b12_mcg: 200,
            choline_mg: 200, vitamin_c_mg: 200, vitamin_d_IU: 200, vitamin_e_mg: 200, vitamin_k_mcg: 200,
            calcium_mg: 200, copper_mg: 200, irom_mg: 200, magnesium_mg: 200, manganese_mg: 200,
            phosphorous_mg: 200, potassium_mg: 200, selenium_mcg: 200, sodium_mg: 200, zink_mg: 200,
            calories_max: 400, carbohydrate_g_max: 400, fiber_g_max: 400, protein_g_max: 400, total_fat_g_max: 400,
            saturated_fat_g_max: 400, fatty_acids_total_trans_g_max: 400, cholesterol_mg_max: 400, sugars_g_max: 400,
            water_g_max: 400, vitamin_a_rae_mcg_max: 400, thiamin_mg_max: 400, riboflavin_mg_max: 400, niacin_mg_max: 400,
            pantothenic_acid_mg_max: 400, vitamin_b6_mg_max: 400, folate_mcg_max: 400, vitamin_b12_mcg_max: 400, choline_mg_max: 400,
            vitamin_c_mg_max: 400, vitamin_d_IU_max: 400, vitamin_e_mg_max: 400, vitamin_k_mcg_max: 400, calcium_mg_max: 400,
            copper_mg_max: 400, irom_mg_max: 400, magnesium_mg_max: 400, manganese_mg_max: 400, phosphorous_mg_max: 400,
            potassium_mg_max: 400, selenium_mcg_max: 400, sodium_mg_max: 400, zink_mg_max: 400
          })
      expect(res.statusCode).toBe(200);
  
      const response = await request(app).get("/dri/all");
      expect(response.body.length).toBe(2);
      expect(response.body[1].name).toBe('Updated name');
      expect(response.body[1].calories).toBe(200);
      expect(response.body[1].calories_max).toBe(400);
      expect(response.body[1].active).toBe(false);
    });

    it("should respond with 400", async () => {
      const dri = await Dri.findOne({name: 'Detox'});
      dri.name = 'Updated name';
      const res = await request(app)
        .put(`/dri/update/${dri._id}`)
        .send({
            user_id: '61e5c51c7a1fa80016a74b1d',
            name: 'Updated name', calories: 200, carbohydrate_g: 200, fiber_g: 200, protein_g: 200,
            total_fat_g: 200, saturated_fat_g: 200, fatty_acids_total_trans_g: 200, cholesterol_mg: 200,
            sugars_g: 200,water_g: 200, vitamin_a_rae_mcg: 200, thiamin_mg: 200, riboflavin_mg: 200,
            niacin_mg: 200, pantothenic_acid_mg: 200, vitamin_b6_mg: 200, folate_mcg: 200, vitamin_b12_mcg: 200,
            choline_mg: 200, vitamin_c_mg: 200, vitamin_d_IU: 200, vitamin_e_mg: 200, vitamin_k_mcg: 200,
            calcium_mg: 200, copper_mg: 200, irom_mg: 200, magnesium_mg: 200, manganese_mg: 200,
            phosphorous_mg: 200, potassium_mg: 200, selenium_mcg: 200, sodium_mg: 200, zink_mg: 200,
            calories_max: 400, carbohydrate_g_max: 400, fiber_g_max: 400, protein_g_max: 400, total_fat_g_max: 400,
            saturated_fat_g_max: 400, fatty_acids_total_trans_g_max: 400, cholesterol_mg_max: 400, sugars_g_max: 400,
            water_g_max: 400, vitamin_a_rae_mcg_max: 400, thiamin_mg_max: 400, riboflavin_mg_max: 400, niacin_mg_max: 400,
            pantothenic_acid_mg_max: 400, vitamin_b6_mg_max: 400, folate_mcg_max: 400, vitamin_b12_mcg_max: 400, choline_mg_max: 400,
            vitamin_c_mg_max: 400, vitamin_d_IU_max: 400, vitamin_e_mg_max: 400, vitamin_k_mcg_max: 400, calcium_mg_max: 400,
            copper_mg_max: 400, irom_mg_max: 400, magnesium_mg_max: 400, manganese_mg_max: 400, phosphorous_mg_max: 400,
            potassium_mg_max: 400, selenium_mcg_max: 400, sodium_mg_max: 400, zink_mg_max: 400
          })
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toBe("Dri validation failed: active: Path `active` is required.");
  
      const response = await request(app).get("/dri/all");
      expect(response.body.length).toBe(2);
      expect(response.body[1].name).toBe('Detox');
      expect(response.body[1].calories).toBe(100);
      expect(response.body[1].calories_max).toBe(200);
      expect(response.body[1].active).toBe(true);
    });
  
  it("should respond with 400 invalid dri id format", async () => {
      const res = await request(app)
        .put(`/dri/update/thisDoesNotPassAsId`)
        .send({})
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toBe("Invalid dri id format");
  
      const response = await request(app).get("/dri/all");
      expect(response.body.length).toBe(2);
  });
})

describe("PUT /user-nutrition/setStatusToActive", () => {
  it("should respond with 200 and success message", async () => {
    const dri = await Dri.findOne({name: 'Protein'});
    const res = await request(app)
      .put(`/dri/setStatusToActive`)
      .send({ 
        user_id: "61e5c51c7a1fa80016a74b1d",
        _id: dri._id
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Successfully set active status for DRI!");

    const response = await request(app).get("/dri/all");
    expect(response.body.length).toBe(2);
    expect(response.body[0].name).toBe('Protein');
    expect(response.body[0].active).toBe(true);
    expect(response.body[1].name).toBe('Detox');
    expect(response.body[1].active).toStrictEqual(false);
  });
})

describe("DELETE /dri/delete/:id", () => {
    it("should respond with a message of deleted", async () => {
      const dri = await Dri.findOne({name: 'Detox'});
      const res = await request(app).delete(
        `/dri/delete/${dri._id}`
      );
      expect(res.body.deletedCount).toBe(1);
      expect(res.statusCode).toBe(200);
  
      const response = await request(app).get("/dri/all");
      expect(response.body.length).toBe(1);
    });
  
    it("should catch invalid dri id query parameter", async () => {
      const res = await request(app).delete(
        `/dri/delete/notValidQueryParameter`
      );
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toBe("Invalid dri id format");
  
      const response = await request(app).get("/dri/all");
      expect(response.body.length).toBe(2);
    });
  });