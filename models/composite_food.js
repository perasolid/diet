let compositeFoodSchema = new mongoose.Schema({
    composite_food_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ingredient_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ingredient_quantity: {
        type: Number,
		required: true,
        min: [6, "Quantity for ingredient must be greater than 0 (zero)"]
    }
})

module.exports = mongoose.model('CompositeFood', compositeFoodSchema);