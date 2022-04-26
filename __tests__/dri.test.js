const request = require('supertest');
require('./config/testConfig');
const app = require('../app');
const jwt = require('jsonwebtoken');

const Dri = mongoose.model('Dri');

const firstDri = {
  user_id: '61e5c51c7a1fa80016a74b1d', active: true, name: 'Detox', calories: 100, carbohydrate_g: 100,
  fiber_g: 100, protein_g: 100, total_fat_g: 100, saturated_fat_g: 100, fatty_acids_total_trans_g: 100, cholesterol_mg: 100, sugars_g: 100,
  water_g: 100, vitamin_a_rae_mcg: 100, thiamin_mg: 100, riboflavin_mg: 100, niacin_mg: 100, pantothenic_acid_mg: 100, vitamin_b6_mg: 100,
  folate_mcg: 100, vitamin_b12_mcg: 100, choline_mg: 100, vitamin_c_mg: 100, vitamin_d_IU: 100, vitamin_e_mg: 100, vitamin_k_mcg: 100,
  calcium_mg: 100, copper_mg: 100, irom_mg: 100, magnesium_mg: 100, manganese_mg: 100, phosphorous_mg: 100, potassium_mg: 100, selenium_mcg: 100,
  sodium_mg: 100, zink_mg: 100, calories_max: 200, carbohydrate_g_max: 200, fiber_g_max: 200, protein_g_max: 200, total_fat_g_max: 200,
  saturated_fat_g_max: 200, fatty_acids_total_trans_g_max: 200, cholesterol_mg_max: 200, sugars_g_max: 200, water_g_max: 200, vitamin_a_rae_mcg_max: 200,
  thiamin_mg_max: 200, riboflavin_mg_max: 200, niacin_mg_max: 200, pantothenic_acid_mg_max: 200, vitamin_b6_mg_max: 200, folate_mcg_max: 200,
  vitamin_b12_mcg_max: 200, choline_mg_max: 200, vitamin_c_mg_max: 200, vitamin_d_IU_max: 200, vitamin_e_mg_max: 200, vitamin_k_mcg_max: 200,
  calcium_mg_max: 200, copper_mg_max: 200, irom_mg_max: 200, magnesium_mg_max: 200, manganese_mg_max: 200, phosphorous_mg_max: 200, potassium_mg_max: 200,
  selenium_mcg_max: 200, sodium_mg_max: 200, zink_mg_max: 200
};

const secondDri = {
  user_id: '61e5c51c7a1fa80016a74b1d', active: false, name: 'Protein', calories: 100, carbohydrate_g: 100,
  fiber_g: 100, protein_g: 100, total_fat_g: 100, saturated_fat_g: 100, fatty_acids_total_trans_g: 100, cholesterol_mg: 100, sugars_g: 100,
  water_g: 100, vitamin_a_rae_mcg: 100, thiamin_mg: 100, riboflavin_mg: 100, niacin_mg: 100, pantothenic_acid_mg: 100, vitamin_b6_mg: 100,
  folate_mcg: 100, vitamin_b12_mcg: 100, choline_mg: 100, vitamin_c_mg: 100, vitamin_d_IU: 100, vitamin_e_mg: 100, vitamin_k_mcg: 100,
  calcium_mg: 100, copper_mg: 100, irom_mg: 100, magnesium_mg: 100, manganese_mg: 100, phosphorous_mg: 100, potassium_mg: 100, selenium_mcg: 100,
  sodium_mg: 100, zink_mg: 100, calories_max: 200, carbohydrate_g_max: 200, fiber_g_max: 200, protein_g_max: 200, total_fat_g_max: 200,
  saturated_fat_g_max: 200, fatty_acids_total_trans_g_max: 200, cholesterol_mg_max: 200, sugars_g_max: 200, water_g_max: 200, vitamin_a_rae_mcg_max: 200,
  thiamin_mg_max: 200, riboflavin_mg_max: 200, niacin_mg_max: 200, pantothenic_acid_mg_max: 200, vitamin_b6_mg_max: 200, folate_mcg_max: 200,
  vitamin_b12_mcg_max: 200, choline_mg_max: 200, vitamin_c_mg_max: 200, vitamin_d_IU_max: 200, vitamin_e_mg_max: 200, vitamin_k_mcg_max: 200,
  calcium_mg_max: 200, copper_mg_max: 200, irom_mg_max: 200, magnesium_mg_max: 200, manganese_mg_max: 200, phosphorous_mg_max: 200, potassium_mg_max: 200,
  selenium_mcg_max: 200, sodium_mg_max: 200, zink_mg_max: 200
};

let userToken;
let adminToken;

beforeAll(async () => {
  userToken = jwt.sign({ "role": "user" }, process.env.SECRET, { expiresIn: '1d' });
  adminToken = jwt.sign({ "role": "admin" }, process.env.SECRET, { expiresIn: '1d' });
});

beforeEach(async () => {
  // Seed with some data
  const driOne = new Dri(firstDri);
  await driOne.save();

  const driTwo = new Dri(secondDri);
  await driTwo.save();
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
      .set('Authorization', `Bearer ${adminToken}`)
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
      .set('Authorization', `Bearer ${userToken}`)
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
      .set('Authorization', `Bearer ${userToken}`)
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
    let body = Object.assign({}, firstDri);
    body.name = 'Test POST';

    const res = await request(app)
      .post("/dri/add")
      .set('Authorization', `Bearer ${userToken}`)
      .send(body);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Successfully created DRI!");
    expect(res.statusCode).toBe(200);

    const response = await request(app)
      .get("/dri/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(3);
  });

  it("should respond with a Bad Request message missing field", async () => {
    let body = Object.assign({}, firstDri);
    delete body.active;

    const res = await request(app)
      .post("/dri/add")
      .set('Authorization', `Bearer ${userToken}`)
      .send(body);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe('Dri validation failed: active: Path `active` is required.');
    expect(res.statusCode).toBe(400);

    const response = await request(app)
      .get("/dri/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);
  });

  it("should respond with a Bad Request message max value greater than min calories", async () => {
    let body = Object.assign({}, firstDri);
    body.calories = 500;

    const res = await request(app)
      .post("/dri/add")
      .set('Authorization', `Bearer ${userToken}`)
      .send(body);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe('Dri validation failed: calories_max: DRI must be less or equal to UI for calories');
    expect(res.statusCode).toBe(400);

    const response = await request(app)
      .get("/dri/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);
  });

  it("should respond with a Bad Request message, invalid user_id format", async () => {
    let body = Object.assign({}, firstDri);
    body.user_id = 'thisIsAInvalidId';
    const res = await request(app)
      .post("/dri/add")
      .set('Authorization', `Bearer ${userToken}`)
      .send(body);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe('Invalid user_id format for Dri creation');
    expect(res.statusCode).toBe(400);

    const response = await request(app)
      .get("/dri/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);
  });

  it("should respond with a Bad Request message, missing user_id", async () => {
    let body = Object.assign({}, firstDri);
    delete body.user_id;

    const res = await request(app)
      .post("/dri/add")
      .set('Authorization', `Bearer ${userToken}`)
      .send(body);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe('Invalid user_id format for Dri creation');
    expect(res.statusCode).toBe(400);

    const response = await request(app)
      .get("/dri/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);
  });
})

describe("PUT /dri/update/:id", () => {
  it("should respond with 200 OK", async () => {
    let body = Object.assign({}, firstDri);
    body.name = 'Updated name';
    body.active = false;
    body.calories = 200;
    body.calories_max = 400;

    const dri = await Dri.findOne({ name: 'Detox' });
    const res = await request(app)
      .put(`/dri/update/${dri._id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .send(body);
    expect(res.statusCode).toBe(200);

    const response = await request(app)
      .get("/dri/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);
    expect(response.body[1].name).toBe('Updated name');
    expect(response.body[1].calories).toBe(200);
    expect(response.body[1].calories_max).toBe(400);
    expect(response.body[1].active).toBe(false);
  });

  it("should respond with 400", async () => {
    let body = Object.assign({}, firstDri);
    delete body.active;
    const dri = await Dri.findOne({ name: 'Detox' });
    const res = await request(app)
      .put(`/dri/update/${dri._id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .send(body);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Dri validation failed: active: Path `active` is required.");

    const response = await request(app)
      .get("/dri/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);
    expect(response.body[1].name).toBe('Detox');
    expect(response.body[1].calories).toBe(100);
    expect(response.body[1].calories_max).toBe(200);
    expect(response.body[1].active).toBe(true);
  });

  it("should respond with 400 invalid dri id format", async () => {
    const res = await request(app)
      .put(`/dri/update/thisDoesNotPassAsId`)
      .set('Authorization', `Bearer ${userToken}`)
      .send({})
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Invalid dri id format");

    const response = await request(app)
      .get("/dri/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);
  });
})

describe("PUT /user-nutrition/setStatusToActive", () => {
  it("should respond with 200 and success message", async () => {
    const dri = await Dri.findOne({ name: 'Protein' });
    const res = await request(app)
      .put(`/dri/setStatusToActive`)
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        user_id: "61e5c51c7a1fa80016a74b1d",
        _id: dri._id
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Successfully set active status for DRI!");

    const response = await request(app)
      .get("/dri/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);
    expect(response.body[0].name).toBe('Protein');
    expect(response.body[0].active).toBe(true);
    expect(response.body[1].name).toBe('Detox');
    expect(response.body[1].active).toStrictEqual(false);
  });
})

describe("DELETE /dri/delete/:id", () => {
  it("should respond with a message of deleted", async () => {
    const dri = await Dri.findOne({ name: 'Detox' });

    const res = await request(app)
      .delete(`/dri/delete/${dri._id}`)
      .set('Authorization', `Bearer ${userToken}`)
    expect(res.body.deletedCount).toBe(1);
    expect(res.statusCode).toBe(200);

    const response = await request(app)
      .get("/dri/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(1);
  });

  it("should catch invalid dri id query parameter", async () => {
    const res = await request(app)
      .delete(`/dri/delete/notValidQueryParameter`)
      .set('Authorization', `Bearer ${userToken}`)
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Invalid dri id format");

    const response = await request(app)
      .get("/dri/all")
      .set('Authorization', `Bearer ${adminToken}`)
    expect(response.body.length).toBe(2);
  });
});