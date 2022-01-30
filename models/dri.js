var mongoose = require( 'mongoose' );

var driSchema = new mongoose.Schema({
	user_id: {
	  type: mongoose.Schema.Types.ObjectId,
	  required: true
	},
	name: {
	  type: String,
	  required: true
	},
	active: {
	  type: Boolean,
	  required: true
	},
	calories_min: {
	  type: Number
	  
	},
	total_fat_g_min: {
	  type: Number
	  
	},
	saturated_fat_g_min: {
	  type: Number
	  
	},
	cholesterol_mg_min: {
	  type: Number
	  
	},
	sodium_mg_min: {
	  type: Number
	  
	},
	choline_mg_min: {
	  type: Number
	  
	},
	folate_mcg_min: {
	  type: Number
	  
	},
	folic_acid_mcg_min: {
	  type: Number
	  
	},
	niacin_mg_min: {
	  type: Number
	  
	},
	pantothenic_acid_mg_min: {
	  type: Number
	  
	},
	riboflavin_mg_min: {
	  type: Number
	  
	},
	thiamin_mg_min: {
	  type: Number
	  
	},
	vitamin_a_IU_min: {
	  type: Number
	  
	},
	vitamin_a_rae_mcg_min: {
	  type: Number
	  
	},
	carotene_alpha_mcg_min: {
	  type: Number
	  
	},
	carotene_beta_mcg_min: {
	  type: Number
	  
	},
	cryptoxanthin_beta_mcg_min: {
	  type: Number
	  
	},
	lutein_zeaxanthin_mcg_min: {
	  type: Number
	  
	},
	vitamin_b12_mcg_min: {
	  type: Number
	  
	},
	vitamin_b6_mg_min: {
	  type: Number
	  
	},
	vitamin_c_mg_min: {
	  type: Number
	  
	},
	vitamin_d_IU_min: {
	  type: Number
	  
	},
	vitamin_e_mg_min: {
	  type: Number
	  
	},
	tocopherol_alpha_mg_min: {
	  type: Number
	  
	},
	vitamin_k_mcg_min: {
	  type: Number
	  
	},
	calcium_mg_min: {
	  type: Number
	  
	},
	copper_mg_min: {
	  type: Number
	  
	},
	irom_mg_min: {
	  type: Number
	  
	},
	magnesium_mg_min: {
	  type: Number
	  
	},
	manganese_mg_min: {
	  type: Number
	  
	},
	phosphorous_mg_min: {
	  type: Number
	  
	},
	potassium_mg_min: {
	  type: Number
	  
	},
	selenium_mcg_min: {
	  type: Number
	  
	},
	zink_mg_min: {
	  type: Number
	  
	},
	protein_g_min: {
	  type: Number
	  
	},
	alanine_g_min: {
	  type: Number
	  
	},
	arginine_g_min: {
	  type: Number
	  
	},
	aspartic_acid_g_min: {
	  type: Number
	  
	},
	cystine_g_min: {
	  type: Number
	  
	},
	glutamic_acid_g_min: {
	  type: Number
	  
	},
	glycine_g_min: {
	  type: Number
	  
	},
	histidine_g_min: {
	  type: Number
	  
	},
	hydroxyproline_g_min: {
	  type: Number
	  
	},
	isoleucine_g_min: {
	  type: Number
	  
	},
	leucine_g_min: {
	  type: Number
	  
	},
	lysine_g_min: {
	  type: Number
	  
	},
	methionine_g_min: {
	  type: Number
	  
	},
	phenylalanine_g_min: {
	  type: Number
	  
	},
	proline_g_min: {
	  type: Number
	  
	},
	serine_g_min: {
	  type: Number
	  
	},
	threonine_g_min: {
	  type: Number
	  
	},
	tryptophan_g_min: {
	  type: Number
	  
	},
	tyrosine_g_min: {
	  type: Number
	  
	},
	valine_g_min: {
	  type: Number
	  
	},
	carbohydrate_g_min: {
	  type: Number
	  
	},
	fiber_g_min: {
	  type: Number
	  
	},
	sugars_g_min: {
	  type: Number
	  
	},
	fructose_g_min: {
	  type: Number
	  
	},
	galactose_g_min: {
	  type: Number
	  
	},
	glucose_g_min: {
	  type: Number
	  
	},
	lactose_g_min: {
	  type: Number
	  
	},
	maltose_g_min: {
	  type: Number
	  
	},
	sucrose_g_min: {
	  type: Number
	  
	},
	fat_g_min: {
	  type: Number
	  
	},
	saturated_fatty_acids_g_min: {
	  type: Number
	  
	},
	monounsaturated_fatty_acids_g_min: {
	  type: Number
	  
	},
	polyunsaturated_fatty_acids_g_min: {
	  type: Number
	  
	},
	fatty_acids_total_trans_g_min: {
	  type: Number
	  
	},
	alcohol_g_min: {
	  type: Number
	  
	},
	ash_g_min: {
	  type: Number
	  
	},
	caffeine_mg_min: {
	  type: Number
	  
	},
	theobromine_mg_min: {
	  type: Number
	  
	},
	water_g_min: {
	  type: Number
	  
	},
	calories_max: {
	  type: Number
	  
	},
	total_fat_g_max: {
	  type: Number
	  
	},
	saturated_fat_g_max: {
	  type: Number
	  
	},
	cholesterol_mg_max: {
	  type: Number
	  
	},
	sodium_mg_max: {
	  type: Number
	  
	},
	choline_mg_max: {
	  type: Number
	  
	},
	folate_mcg_max: {
	  type: Number
	  
	},
	folic_acid_mcg_max: {
	  type: Number
	  
	},
	niacin_mg_max: {
	  type: Number
	  
	},
	pantothenic_acid_mg_max: {
	  type: Number
	  
	},
	riboflavin_mg_max: {
	  type: Number
	  
	},
	thiamin_mg_max: {
	  type: Number
	  
	},
	vitamin_a_IU_max: {
	  type: Number
	  
	},
	vitamin_a_rae_mcg_max: {
	  type: Number
	  
	},
	carotene_alpha_mcg_max: {
	  type: Number
	  
	},
	carotene_beta_mcg_max: {
	  type: Number
	  
	},
	cryptoxanthin_beta_mcg_max: {
	  type: Number
	  
	},
	lutein_zeaxanthin_mcg_max: {
	  type: Number
	  
	},
	vitamin_b12_mcg_max: {
	  type: Number
	  
	},
	vitamin_b6_mg_max: {
	  type: Number
	  
	},
	vitamin_c_mg_max: {
	  type: Number
	  
	},
	vitamin_d_IU_max: {
	  type: Number
	  
	},
	vitamin_e_mg_max: {
	  type: Number
	  
	},
	tocopherol_alpha_mg_max: {
	  type: Number
	  
	},
	vitamin_k_mcg_max: {
	  type: Number
	  
	},
	calcium_mg_max: {
	  type: Number
	  
	},
	copper_mg_max: {
	  type: Number
	  
	},
	irom_mg_max: {
	  type: Number
	  
	},
	magnesium_mg_max: {
	  type: Number
	  
	},
	manganese_mg_max: {
	  type: Number
	  
	},
	phosphorous_mg_max: {
	  type: Number
	  
	},
	potassium_mg_max: {
	  type: Number
	  
	},
	selenium_mcg_max: {
	  type: Number
	  
	},
	zink_mg_max: {
	  type: Number
	  
	},
	protein_g_max: {
	  type: Number
	  
	},
	alanine_g_max: {
	  type: Number
	  
	},
	arginine_g_max: {
	  type: Number
	  
	},
	aspartic_acid_g_max: {
	  type: Number
	  
	},
	cystine_g_max: {
	  type: Number
	  
	},
	glutamic_acid_g_max: {
	  type: Number
	  
	},
	glycine_g_max: {
	  type: Number
	  
	},
	histidine_g_max: {
	  type: Number
	  
	},
	hydroxyproline_g_max: {
	  type: Number
	  
	},
	isoleucine_g_max: {
	  type: Number
	  
	},
	leucine_g_max: {
	  type: Number
	  
	},
	lysine_g_max: {
	  type: Number
	  
	},
	methionine_g_max: {
	  type: Number
	  
	},
	phenylalanine_g_max: {
	  type: Number
	  
	},
	proline_g_max: {
	  type: Number
	  
	},
	serine_g_max: {
	  type: Number
	  
	},
	threonine_g_max: {
	  type: Number
	  
	},
	tryptophan_g_max: {
	  type: Number
	  
	},
	tyrosine_g_max: {
	  type: Number
	  
	},
	valine_g_max: {
	  type: Number
	  
	},
	carbohydrate_g_max: {
	  type: Number
	  
	},
	fiber_g_max: {
	  type: Number
	  
	},
	sugars_g_max: {
	  type: Number
	  
	},
	fructose_g_max: {
	  type: Number
	  
	},
	galactose_g_max: {
	  type: Number
	  
	},
	glucose_g_max: {
	  type: Number
	  
	},
	lactose_g_max: {
	  type: Number
	  
	},
	maltose_g_max: {
	  type: Number
	  
	},
	sucrose_g_max: {
	  type: Number
	  
	},
	fat_g_max: {
	  type: Number
	  
	},
	saturated_fatty_acids_g_max: {
	  type: Number
	  
	},
	monounsaturated_fatty_acids_g_max: {
	  type: Number
	  
	},
	polyunsaturated_fatty_acids_g_max: {
	  type: Number
	  
	},
	fatty_acids_total_trans_g_max: {
	  type: Number
	  
	},
	alcohol_g_max: {
	  type: Number
	  
	},
	ash_g_max: {
	  type: Number
	  
	},
	caffeine_mg_max: {
	  type: Number
	  
	},
	theobromine_mg_max: {
	  type: Number
	  
	},
	water_g_max: {
	  type: Number
	  
	},
});

const Dri = module.exports = mongoose.model('Dri', driSchema);