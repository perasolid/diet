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
      expect(res.body.length).toBe(1);
      expect(res.body[0]).toHaveProperty("_id");
      expect(res.body[0]).toHaveProperty("quantity");
      expect(res.body[0]).toHaveProperty("date_of_consumption");
      expect(res.body[0]).toHaveProperty("user_id");
      expect(res.body[0]).toHaveProperty("nutrition_id");
      expect(res.body[0].quantity).toBe(35);
      expect(res.body[0].user_id).toBe("61e5c51c7a1fa80016a74b1d");
      expect(res.statusCode).toBe(200);
    })
  })

