const CompositeFood = mongoose.model("CompositeFood");
const Nutrition = mongoose.model("Nutrition");

module.exports.addCompositeFood = async function(req, res) {
    let nutrition = new Nutrition(req.body.calculatedNutrition);
	nutrition.save()
    .then(nutrition => {
        let ingredientsToBeInserted = req.body.ingredients.map(ingredient => ({ ...ingredient, composite_food_id: nutrition._id }));
        CompositeFood.insertMany(ingredientsToBeInserted)
        .then(() => res.status(200).json({"message":"Created composite food!"}))
        .catch((err) => {
            console.log(err);
            return res.status(500).json({"message":"Something went wrong while creating ingredients"});
        });
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json({"message":"Something went wrong while creating composite food"});
    });
}