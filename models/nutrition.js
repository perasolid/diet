var mongoose = require( 'mongoose' );

var nutritionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	calories: {
		type: Number,
		required: true
	},
	total_fat_g: {
		type: Number,
		required: true
	},
	saturated_fat_g: {
		type: Number,
		required: true
	},
	cholesterol_mg: {
		type: Number,
		required: true
	},
	sodium_mg: {
		type: Number,
		required: true
	},
	choline_mg: {
		type: Number,
		required: true
	},
	folate_mcg: {
		type: Number,
		required: true
	},
	folic_acid_mcg: {
		type: Number,
		required: true
	},
	niacin_mg: {
		type: Number,
		required: true
	},
	pantothenic_acid_mg: {
		type: Number,
		required: true
	},
	riboflavin_mg: {
		type: Number,
		required: true
	},
	thiamin_mg: {
		type: Number,
		required: true
	},
	vitamin_a_IU: {
		type: Number,
		required: true
	},
	vitamin_a_rae_mcg: {
		type: Number,
		required: true
	},
	carotene_alpha_mcg: {
		type: Number,
		required: true
	},
	carotene_beta_mcg: {
		type: Number,
		required: true
	},
	cryptoxanthin_beta_mcg: {
		type: Number,
		required: true
	},
	lutein_zeaxanthin_mcg: {
		type: Number,
		required: true
	},
	vitamin_b12_mcg: {
		type: Number,
		required: true
	},
	vitamin_b6_mg: {
		type: Number,
		required: true
	},
	vitamin_c_mg: {
		type: Number,
		required: true
	},
	vitamin_d_IU: {
		type: Number,
		required: true
	},
	vitamin_e_mg: {
		type: Number,
		required: true
	},
	tocopherol_alpha_mg: {
		type: Number,
		required: true
	},
	vitamin_k_mcg: {
		type: Number,
		required: true
	},
	calcium_mg: {
		type: Number,
		required: true
	},
	copper_mg: {
		type: Number,
		required: true
	},
	irom_mg: {
		type: Number,
		required: true
	},
	magnesium_mg: {
		type: Number,
		required: true
	},
	manganese_mg: {
		type: Number,
		required: true
	},
	phosphorous_mg: {
		type: Number,
		required: true
	},
	potassium_mg: {
		type: Number,
		required: true
	},
	selenium_mcg: {
		type: Number,
		required: true
	},
	zink_mg: {
		type: Number,
		required: true
	},
	protein_g: {
		type: Number,
		required: true
	},
	alanine_g: {
		type: Number,
		required: true
	},
	arginine_g: {
		type: Number,
		required: true
	},
	aspartic_acid_g: {
		type: Number,
		required: true
	},
	cystine_g: {
		type: Number,
		required: true
	},
	glutamic_acid_g: {
		type: Number,
		required: true
	},
	glycine_g: {
		type: Number,
		required: true
	},
	histidine_g: {
		type: Number,
		required: true
	},
	hydroxyproline_g: {
		type: Number,
		required: true
	},
	isoleucine_g: {
		type: Number,
		required: true
	},
	leucine_g: {
		type: Number,
		required: true
	},
	lysine_g: {
		type: Number,
		required: true
	},
	methionine_g: {
		type: Number,
		required: true
	},
	phenylalanine_g: {
		type: Number,
		required: true
	},
	proline_g: {
		type: Number,
		required: true
	},
	serine_g: {
		type: Number,
		required: true
	},
	threonine_g: {
		type: Number,
		required: true
	},
	tryptophan_g: {
		type: Number,
		required: true
	},
	tyrosine_g: {
		type: Number,
		required: true
	},
	valine_g: {
		type: Number,
		required: true
	},
	carbohydrate_g: {
		type: Number,
		required: true
	},
	fiber_g: {
		type: Number,
		required: true
	},
	sugars_g: {
		type: Number,
		required: true
	},
	fructose_g: {
		type: Number,
		required: true
	},
	galactose_g: {
		type: Number,
		required: true
	},
	glucose_g: {
		type: Number,
		required: true
	},
	lactose_g: {
		type: Number,
		required: true
	},
	maltose_g: {
		type: Number,
		required: true
	},
	sucrose_g: {
		type: Number,
		required: true
	},
	fat_g: {
		type: Number,
		required: true
	},
	saturated_fatty_acids_g: {
		type: Number,
		required: true
	},
	monounsaturated_fatty_acids_g: {
		type: Number,
		required: true
	},
	polyunsaturated_fatty_acids_g: {
		type: Number,
		required: true
	},
	fatty_acids_total_trans_g: {
		type: Number,
		required: true
	},
	alcohol_g: {
		type: Number,
		required: true
	},
	ash_g: {
		type: Number,
		required: true
	},
	caffeine_mg: {
		type: Number,
		required: true
	},
	theobromine_mg: {
		type: Number,
		required: true
	},
	water_g: {
		type: Number,
		required: true
	},
});

const Nutrition = module.exports = mongoose.model('Nutrition', nutritionSchema);