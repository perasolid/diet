var verification_tokenSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  token: { type: String, required: true }
});

const Verification_token = module.exports = mongoose.model('Verification_token', verification_tokenSchema);