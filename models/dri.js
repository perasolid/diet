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
	calcium_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
					return this.calcium_mg <= value;
			}, 'DRI must be less or equal to UI for calcium_mg'
		]
	},
	calcium_mg: {
		type: Number,
		required: true
	},
	calories_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.calories <= value;
			}, 'DRI must be less or equal to UI for calories'
		]
	},
	calories: {
		type: Number,
		required: true
	},
	carbohydrate_g_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.carbohydrate_g <= value;
			}, 'DRI must be less or equal to UI for carbohydrate_g'
		]
	},
	carbohydrate_g: {
		type: Number,
		required: true
	},
	cholesterol_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.cholesterol_mg <= value;
			}, 'DRI must be less or equal to UI for cholesterol_mg'
		]
	},
	cholesterol_mg: {
		type: Number,
		required: true
	},
	choline_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.choline_mg <= value;
			}, 'DRI must be less or equal to UI for choline_mg'
		]
	},
	choline_mg: {
		type: Number,
		required: true
	},
	copper_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.copper_mg <= value;
			}, 'DRI must be less or equal to UI for copper_mg'
		]
	},
	copper_mg: {
		type: Number,
		required: true
	},
	fatty_acids_total_trans_g_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.fatty_acids_total_trans_g <= value;
			}, 'DRI must be less or equal to UI for fatty_acids_total_trans_g'
		]
	},
	fatty_acids_total_trans_g: {
		type: Number,
		required: true
	},
	fiber_g_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.fiber_g <= value;
			}, 'DRI must be less or equal to UI for fiber_g'
		]
	},
	fiber_g: {
		type: Number,
		required: true
	},
	folate_mcg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.folate_mcg <= value;
			}, 'DRI must be less or equal to UI for folate_mcg'
		]
	},
	folate_mcg: {
		type: Number,
		required: true
	},
	irom_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.irom_mg <= value;
			}, 'DRI must be less or equal to UI for irom_mg'
		]
	},
	irom_mg: {
		type: Number,
		required: true
	},
	magnesium_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.magnesium_mg <= value;
			}, 'DRI must be less or equal to UI for magnesium_mg'
		]
	},
	magnesium_mg: {
		type: Number,
		required: true
	},
	manganese_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.manganese_mg <= value;
			}, 'DRI must be less or equal to UI for manganese_mg'
		]
	},
	manganese_mg: {
		type: Number,
		required: true
	},
	niacin_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.niacin_mg <= value;
			}, 'DRI must be less or equal to UI for niacin_mg'
		]
	},
	niacin_mg: {
		type: Number,
		required: true
	},
	pantothenic_acid_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.pantothenic_acid_mg <= value;
			}, 'DRI must be less or equal to UI for pantothenic_acid_mg'
		]
	},
	pantothenic_acid_mg: {
		type: Number,
		required: true
	},
	phosphorous_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.phosphorous_mg <= value;
			}, 'DRI must be less or equal to UI for phosphorous_mg'
		]
	},
	phosphorous_mg: {
		type: Number,
		required: true
	},
	potassium_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.potassium_mg <= value;
			}, 'DRI must be less or equal to UI for potassium_mg'
		]
	},
	potassium_mg: {
		type: Number,
		required: true
	},
	protein_g_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.protein_g <= value;
			}, 'DRI must be less or equal to UI for protein_g'
		]
	},
	protein_g: {
		type: Number,
		required: true
	},
	riboflavin_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.riboflavin_mg <= value;
			}, 'DRI must be less or equal to UI for riboflavin_mg'
		]
	},
	riboflavin_mg: {
		type: Number,
		required: true
	},
	saturated_fat_g_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.saturated_fat_g <= value;
			}, 'DRI must be less or equal to UI for saturated_fat_g'
		]
	},
	saturated_fat_g: {
		type: Number,
		required: true
	},
	selenium_mcg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.selenium_mcg <= value;
			}, 'DRI must be less or equal to UI for selenium_mcg'
		]
	},
	selenium_mcg: {
		type: Number,
		required: true
	},
	sodium_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.sodium_mg <= value;
			}, 'DRI must be less or equal to UI for sodium_mg'
		]
	},
	sodium_mg: {
		type: Number,
		required: true
	},
	sugars_g_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.sugars_g <= value;
			}, 'DRI must be less or equal to UI for sugars_g'
		]
	},
	sugars_g: {
		type: Number,
		required: true
	},
	thiamin_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.thiamin_mg <= value;
			}, 'DRI must be less or equal to UI for thiamin_mg'
		]
	},
	thiamin_mg: {
		type: Number,
		required: true
	},
	total_fat_g_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.total_fat_g <= value;
			}, 'DRI must be less or equal to UI for total_fat_g'
		]
	},
	total_fat_g: {
		type: Number,
		required: true
	},
	vitamin_a_rae_mcg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.vitamin_a_rae_mcg <= value;
			}, 'DRI must be less or equal to UI for vitamin_a_rae_mcg'
		]
	},
	vitamin_a_rae_mcg: {
		type: Number,
		required: true
	},
	vitamin_b12_mcg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.vitamin_b12_mcg <= value;
			}, 'DRI must be less or equal to UI for vitamin_b12_mcg'
		]
	},
	vitamin_b12_mcg: {
		type: Number,
		required: true
	},
	vitamin_b6_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.vitamin_b6_mg <= value;
			}, 'DRI must be less or equal to UI for vitamin_b6_mg'
		]
	},
	vitamin_b6_mg: {
		type: Number,
		required: true
	},
	vitamin_c_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.vitamin_c_mg <= value;
			}, 'DRI must be less or equal to UI for vitamin_c_mg'
		]
	},
	vitamin_c_mg: {
		type: Number,
		required: true
	},
	vitamin_d_IU_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.vitamin_d_IU <= value;
			}, 'DRI must be less or equal to UI for vitamin_d_IU'
		]
	},
	vitamin_d_IU: {
		type: Number,
		required: true
	},
	vitamin_e_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.vitamin_e_mg <= value;
			}, 'DRI must be less or equal to UI for vitamin_e_mg'
		]
	},
	vitamin_e_mg: {
		type: Number,
		required: true
	},
	vitamin_k_mcg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.vitamin_k_mcg <= value;
			}, 'DRI must be less or equal to UI for vitamin_k_mcg'
		]
	},
	vitamin_k_mcg: {
		type: Number,
		required: true
	},
	water_g_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.water_g <= value;
			}, 'DRI must be less or equal to UI for water_g'
		]
	},
	water_g: {
		type: Number,
		required: true
	},
	zink_mg_max: {
		type: Number,
		required: true,
		validate: [
			function (value) {
				return this.zink_mg <= value;
			}, 'DRI must be less or equal to UI for zink_mg'
		]
	},
	zink_mg: {
		type: Number,
		required: true
	}
});

const Dri = module.exports = mongoose.model('Dri', driSchema);