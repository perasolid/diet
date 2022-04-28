let compositeFoodSchema = new mongoose.Schema({
    composite_food_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ingredient_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ingredient_ratio: {
        type: Number,
		required: true,
        min: [0, "Ratio of the ingredient must be greater than 0 (zero)"]
    }
})

module.exports = mongoose.model('CompositeFood', compositeFoodSchema);