const request = require('supertest');
require('./config/testConfig');
const app = require('../app');
const jwt = require('jsonwebtoken');

const Nutrition = mongoose.model('Nutrition');

const validNutrition = {
  name: 'Apples', calories: 100, carbohydrate_g: 100, fiber_g: 100, protein_g: 100,
  total_fat_g: 100, saturated_fat_g: 100, fatty_acids_total_trans_g: 100, cholesterol_mg: 100, sugars_g: 100,
  water_g: 100, vitamin_a_rae_mcg: 100, thiamin_mg: 100, riboflavin_mg: 100, niacin_mg: 100, pantothenic_acid_mg: 100,
  vitamin_b6_mg: 100, folate_mcg: 100, vitamin_b12_mcg: 100, choline_mg: 100, vitamin_c_mg: 100, vitamin_d_IU: 100,
  vitamin_e_mg: 100, vitamin_k_mcg: 100, calcium_mg: 100, copper_mg: 100, irom_mg: 100, magnesium_mg: 100,
  manganese_mg: 100, phosphorous_mg: 100, potassium_mg: 100, selenium_mcg: 100, sodium_mg: 100, zink_mg: 100
};

let userToken;
let adminToken;

beforeAll(async () => {
  userToken = jwt.sign({ "role": "user" }, process.env.SECRET, { expiresIn: '1d' });
  adminToken = jwt.sign({ "role": "admin" }, process.env.SECRET, { expiresIn: '1d' });
});

beforeEach(async () => {
  // Seed with some data
  let nutrition = new Nutrition(validNutrition);
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
      .set('Authorization', `Bearer ${userToken}`)
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
      .set('Authorization', `Bearer ${userToken}`)
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
      .set('Authorization', `Bearer ${userToken}`)
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
      .set('Authorization', `Bearer ${adminToken}`)
    expect(res.body.length).toBe(1);
    expect(res.body[0]).toHaveProperty("_id");
    expect(res.statusCode).toBe(200);
  })
})

describe('GET nutritions/numberOfNutritions', () => {
  it('should get total number of nutrition documents', async () => {
    const res = await request(app)
      .get('/nutritions/numberOfNutritions')
      .set('Authorization', `Bearer ${adminToken}`)
    expect(res.body).toHaveProperty("numberOfNutritions");
    expect(res.body.numberOfNutritions).toBe(1);
    expect(res.statusCode).toBe(200);
  })
})

describe("POST /nutritions", () => {
  it("should respond with a success message", async () => {
    let nutrition = Object.assign({}, validNutrition);
    nutrition.name = 'Test name';

    const res = await request(app)
      .post("/nutritions/add")
      .set('Authorization', `Bearer ${userToken}`)
      .send(nutrition);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Test name successfully created!");
    expect(res.statusCode).toBe(200);

    const response = await request(app)
      .get("/nutritions/all")
      .set('Authorization', `Bearer ${userToken}`)
    expect(response.body.length).toBe(2);
  });
})

describe('POST nutritions/add', () => {
  it('should respond with missing name field message', async () => {
    let nutrition = Object.assign({}, validNutrition);
    delete nutrition.name;

    const res = await request(app)
      .post('/nutritions/add')
      .set('Authorization', `Bearer ${userToken}`)
      .send(nutrition)
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Nutrition validation failed: name: Path `name` is required.");
    expect(res.statusCode).toBe(400);

    const response = await request(app)
      .get("/nutritions/all")
      .set('Authorization', `Bearer ${userToken}`)
    expect(response.body.length).toBe(1);
  })
})

describe("PUT /nutritions/update/:id", () => {
  it("should respond with 200 OK", async () => {
    let nutrition = Object.assign({}, validNutrition);
    nutrition.name = 'Updated name';
    nutrition.calories = 300;

    const existingNutrition = await Nutrition.findOne({name: 'Apples'});
    const res = await request(app)
      .put(`/nutritions/update/${existingNutrition._id}`)
      .set('Authorization', `Bearer ${adminToken}`)
      .send(nutrition)
    expect(res.statusCode).toBe(200);

    const response = await request(app)
      .get("/nutritions/all")
      .set('Authorization', `Bearer ${userToken}`)
    expect(response.body.length).toBe(1);

    const updatedNutrition = await request(app)
      .get("/nutritions/all?search=Updated name")
      .set('Authorization', `Bearer ${userToken}`)
    expect(updatedNutrition.body[0].name).toBe('Updated name');
    expect(updatedNutrition.body[0].calories).toBe(300);
    expect(updatedNutrition.body.length).toBe(1);
  });

  it("should respond with 400", async () => {
      const res = await request(app)
        .put(`/nutritions/update/thisDoesNotPassAsId`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({})
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toBe("Invalid nutrition id format");
  
      const response = await request(app)
        .get("/nutritions/all")
        .set('Authorization', `Bearer ${userToken}`)
      expect(response.body.length).toBe(1);
  });
})

describe("DELETE /nutritions/delete/:id", () => {
  it("should respond with a message of deleted", async () => {
    const nutrition = await Nutrition.findOne({name: 'Apples'});
    const res = await request(app)
      .delete(`/nutritions/delete/${nutrition._id}`)
      .set('Authorization', `Bearer ${adminToken}`)
    expect(res.body.deletedCount).toBe(1);
    expect(res.statusCode).toBe(200);

    const response = await request(app)
      .get("/nutritions/all")
      .set('Authorization', `Bearer ${userToken}`)
    expect(response.body.length).toBe(0);
  });

  it("should catch invalid nutrition id query parameter", async () => {
    const res = await request(app)
      .delete(`/nutritions/delete/notValidQueryParameter`)
      .set('Authorization', `Bearer ${adminToken}`)
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe("Invalid nutrition id format");

    const response = await request(app)
      .get("/nutritions/all")
      .set('Authorization', `Bearer ${userToken}`)
    expect(response.body.length).toBe(1);
  });
});