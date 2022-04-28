let user_nutritionSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true
  },
  date_of_consumption: {
    type: Date,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  nutrition_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = mongoose.model('User_nutrition', user_nutritionSchema);