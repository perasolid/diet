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
	  type: Number,
	  default: null
	  
	},
	total_fat_g_min: {
	  type: Number,
	  default: null
	  
	},
	saturated_fat_g_min: {
	  type: Number,
	  default: null
	  
	},
	cholesterol_mg_min: {
	  type: Number,
	  default: null
	  
	},
	sodium_mg_min: {
	  type: Number,
	  default: null
	  
	},
	choline_mg_min: {
	  type: Number,
	  default: null
	  
	},
	folate_mcg_min: {
	  type: Number,
	  default: null
	  
	},
	folic_acid_mcg_min: {
	  type: Number,
	  default: null
	  
	},
	niacin_mg_min: {
	  type: Number,
	  default: null
	  
	},
	pantothenic_acid_mg_min: {
	  type: Number,
	  default: null
	  
	},
	riboflavin_mg_min: {
	  type: Number,
	  default: null
	  
	},
	thiamin_mg_min: {
	  type: Number,
	  default: null
	  
	},
	vitamin_a_IU_min: {
	  type: Number,
	  default: null
	  
	},
	vitamin_a_rae_mcg_min: {
	  type: Number,
	  default: null
	  
	},
	carotene_alpha_mcg_min: {
	  type: Number,
	  default: null
	  
	},
	carotene_beta_mcg_min: {
	  type: Number,
	  default: null
	  
	},
	cryptoxanthin_beta_mcg_min: {
	  type: Number,
	  default: null
	  
	},
	lutein_zeaxanthin_mcg_min: {
	  type: Number,
	  default: null
	  
	},
	vitamin_b12_mcg_min: {
	  type: Number,
	  default: null
	  
	},
	vitamin_b6_mg_min: {
	  type: Number,
	  default: null
	  
	},
	vitamin_c_mg_min: {
	  type: Number,
	  default: null
	  
	},
	vitamin_d_IU_min: {
	  type: Number,
	  default: null
	  
	},
	vitamin_e_mg_min: {
	  type: Number,
	  default: null
	  
	},
	tocopherol_alpha_mg_min: {
	  type: Number,
	  default: null
	  
	},
	vitamin_k_mcg_min: {
	  type: Number,
	  default: null
	  
	},
	calcium_mg_min: {
	  type: Number,
	  default: null
	  
	},
	copper_mg_min: {
	  type: Number,
	  default: null
	  
	},
	irom_mg_min: {
	  type: Number,
	  default: null
	  
	},
	magnesium_mg_min: {
	  type: Number,
	  default: null
	  
	},
	manganese_mg_min: {
	  type: Number,
	  default: null
	  
	},
	phosphorous_mg_min: {
	  type: Number,
	  default: null
	  
	},
	potassium_mg_min: {
	  type: Number,
	  default: null
	  
	},
	selenium_mcg_min: {
	  type: Number,
	  default: null
	  
	},
	zink_mg_min: {
	  type: Number,
	  default: null
	  
	},
	protein_g_min: {
	  type: Number,
	  default: null
	  
	},
	alanine_g_min: {
	  type: Number,
	  default: null
	  
	},
	arginine_g_min: {
	  type: Number,
	  default: null
	  
	},
	aspartic_acid_g_min: {
	  type: Number,
	  default: null
	  
	},
	cystine_g_min: {
	  type: Number,
	  default: null
	  
	},
	glutamic_acid_g_min: {
	  type: Number,
	  default: null
	  
	},
	glycine_g_min: {
	  type: Number,
	  default: null
	  
	},
	histidine_g_min: {
	  type: Number,
	  default: null
	  
	},
	hydroxyproline_g_min: {
	  type: Number,
	  default: null
	  
	},
	isoleucine_g_min: {
	  type: Number,
	  default: null
	  
	},
	leucine_g_min: {
	  type: Number,
	  default: null
	  
	},
	lysine_g_min: {
	  type: Number,
	  default: null
	  
	},
	methionine_g_min: {
	  type: Number,
	  default: null
	  
	},
	phenylalanine_g_min: {
	  type: Number,
	  default: null
	  
	},
	proline_g_min: {
	  type: Number,
	  default: null
	  
	},
	serine_g_min: {
	  type: Number,
	  default: null
	  
	},
	threonine_g_min: {
	  type: Number,
	  default: null
	  
	},
	tryptophan_g_min: {
	  type: Number,
	  default: null
	  
	},
	tyrosine_g_min: {
	  type: Number,
	  default: null
	  
	},
	valine_g_min: {
	  type: Number,
	  default: null
	  
	},
	carbohydrate_g_min: {
	  type: Number,
	  default: null
	  
	},
	fiber_g_min: {
	  type: Number,
	  default: null
	  
	},
	sugars_g_min: {
	  type: Number,
	  default: null
	  
	},
	fructose_g_min: {
	  type: Number,
	  default: null
	  
	},
	galactose_g_min: {
	  type: Number,
	  default: null
	  
	},
	glucose_g_min: {
	  type: Number,
	  default: null
	  
	},
	lactose_g_min: {
	  type: Number,
	  default: null
	  
	},
	maltose_g_min: {
	  type: Number,
	  default: null
	  
	},
	sucrose_g_min: {
	  type: Number,
	  default: null
	  
	},
	fat_g_min: {
	  type: Number,
	  default: null
	  
	},
	saturated_fatty_acids_g_min: {
	  type: Number,
	  default: null
	  
	},
	monounsaturated_fatty_acids_g_min: {
	  type: Number,
	  default: null
	  
	},
	polyunsaturated_fatty_acids_g_min: {
	  type: Number,
	  default: null
	  
	},
	fatty_acids_total_trans_g_min: {
	  type: Number,
	  default: null
	  
	},
	alcohol_g_min: {
	  type: Number,
	  default: null
	  
	},
	ash_g_min: {
	  type: Number,
	  default: null
	  
	},
	caffeine_mg_min: {
	  type: Number,
	  default: null
	  
	},
	theobromine_mg_min: {
	  type: Number,
	  default: null
	  
	},
	water_g_min: {
	  type: Number,
	  default: null
	  
	},
	calories_max: {
	  type: Number,
	  default: null
	  
	},
	total_fat_g_max: {
	  type: Number,
	  default: null
	  
	},
	saturated_fat_g_max: {
	  type: Number,
	  default: null
	  
	},
	cholesterol_mg_max: {
	  type: Number,
	  default: null
	  
	},
	sodium_mg_max: {
	  type: Number,
	  default: null
	  
	},
	choline_mg_max: {
	  type: Number,
	  default: null
	  
	},
	folate_mcg_max: {
	  type: Number,
	  default: null
	  
	},
	folic_acid_mcg_max: {
	  type: Number,
	  default: null
	  
	},
	niacin_mg_max: {
	  type: Number,
	  default: null
	  
	},
	pantothenic_acid_mg_max: {
	  type: Number,
	  default: null
	  
	},
	riboflavin_mg_max: {
	  type: Number,
	  default: null
	  
	},
	thiamin_mg_max: {
	  type: Number,
	  default: null
	  
	},
	vitamin_a_IU_max: {
	  type: Number,
	  default: null
	  
	},
	vitamin_a_rae_mcg_max: {
	  type: Number,
	  default: null
	  
	},
	carotene_alpha_mcg_max: {
	  type: Number,
	  default: null
	  
	},
	carotene_beta_mcg_max: {
	  type: Number,
	  default: null
	  
	},
	cryptoxanthin_beta_mcg_max: {
	  type: Number,
	  default: null
	  
	},
	lutein_zeaxanthin_mcg_max: {
	  type: Number,
	  default: null
	  
	},
	vitamin_b12_mcg_max: {
	  type: Number,
	  default: null
	  
	},
	vitamin_b6_mg_max: {
	  type: Number,
	  default: null
	  
	},
	vitamin_c_mg_max: {
	  type: Number,
	  default: null
	  
	},
	vitamin_d_IU_max: {
	  type: Number,
	  default: null
	  
	},
	vitamin_e_mg_max: {
	  type: Number,
	  default: null
	  
	},
	tocopherol_alpha_mg_max: {
	  type: Number,
	  default: null
	  
	},
	vitamin_k_mcg_max: {
	  type: Number,
	  default: null
	  
	},
	calcium_mg_max: {
	  type: Number,
	  default: null
	  
	},
	copper_mg_max: {
	  type: Number,
	  default: null
	  
	},
	irom_mg_max: {
	  type: Number,
	  default: null
	  
	},
	magnesium_mg_max: {
	  type: Number,
	  default: null
	  
	},
	manganese_mg_max: {
	  type: Number,
	  default: null
	  
	},
	phosphorous_mg_max: {
	  type: Number,
	  default: null
	  
	},
	potassium_mg_max: {
	  type: Number,
	  default: null
	  
	},
	selenium_mcg_max: {
	  type: Number,
	  default: null
	  
	},
	zink_mg_max: {
	  type: Number,
	  default: null
	  
	},
	protein_g_max: {
	  type: Number,
	  default: null
	  
	},
	alanine_g_max: {
	  type: Number,
	  default: null
	  
	},
	arginine_g_max: {
	  type: Number,
	  default: null
	  
	},
	aspartic_acid_g_max: {
	  type: Number,
	  default: null
	  
	},
	cystine_g_max: {
	  type: Number,
	  default: null
	  
	},
	glutamic_acid_g_max: {
	  type: Number,
	  default: null
	  
	},
	glycine_g_max: {
	  type: Number,
	  default: null
	  
	},
	histidine_g_max: {
	  type: Number,
	  default: null
	  
	},
	hydroxyproline_g_max: {
	  type: Number,
	  default: null
	  
	},
	isoleucine_g_max: {
	  type: Number,
	  default: null
	  
	},
	leucine_g_max: {
	  type: Number,
	  default: null
	  
	},
	lysine_g_max: {
	  type: Number,
	  default: null
	  
	},
	methionine_g_max: {
	  type: Number,
	  default: null
	  
	},
	phenylalanine_g_max: {
	  type: Number,
	  default: null
	  
	},
	proline_g_max: {
	  type: Number,
	  default: null
	  
	},
	serine_g_max: {
	  type: Number,
	  default: null
	  
	},
	threonine_g_max: {
	  type: Number,
	  default: null
	  
	},
	tryptophan_g_max: {
	  type: Number,
	  default: null
	  
	},
	tyrosine_g_max: {
	  type: Number,
	  default: null
	  
	},
	valine_g_max: {
	  type: Number,
	  default: null
	  
	},
	carbohydrate_g_max: {
	  type: Number,
	  default: null
	  
	},
	fiber_g_max: {
	  type: Number,
	  default: null
	  
	},
	sugars_g_max: {
	  type: Number,
	  default: null
	  
	},
	fructose_g_max: {
	  type: Number,
	  default: null
	  
	},
	galactose_g_max: {
	  type: Number,
	  default: null
	  
	},
	glucose_g_max: {
	  type: Number,
	  default: null
	  
	},
	lactose_g_max: {
	  type: Number,
	  default: null
	  
	},
	maltose_g_max: {
	  type: Number,
	  default: null
	  
	},
	sucrose_g_max: {
	  type: Number,
	  default: null
	  
	},
	fat_g_max: {
	  type: Number,
	  default: null
	  
	},
	saturated_fatty_acids_g_max: {
	  type: Number,
	  default: null
	  
	},
	monounsaturated_fatty_acids_g_max: {
	  type: Number,
	  default: null
	  
	},
	polyunsaturated_fatty_acids_g_max: {
	  type: Number,
	  default: null
	  
	},
	fatty_acids_total_trans_g_max: {
	  type: Number,
	  default: null
	  
	},
	alcohol_g_max: {
	  type: Number,
	  default: null
	  
	},
	ash_g_max: {
	  type: Number,
	  default: null
	  
	},
	caffeine_mg_max: {
	  type: Number,
	  default: null
	  
	},
	theobromine_mg_max: {
	  type: Number,
	  default: null
	  
	},
	water_g_max: {
	  type: Number,
	  default: null
	  
	}
});

const Dri = module.exports = mongoose.model('Dri', driSchema);