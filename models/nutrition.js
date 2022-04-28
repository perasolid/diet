let nutritionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	calories: { 
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
	protein_g: { 
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
	fatty_acids_total_trans_g: { 
		type: Number,
		required: true
	},
	cholesterol_mg: { 
		type: Number,
		required: true
	},
	sugars_g: { 
		type: Number,
		required: true
	},
	water_g: { 
		type: Number,
		required: true
	},
	vitamin_a_rae_mcg: { 
		type: Number,
		required: true
	},
	thiamin_mg: { 
		type: Number,
		required: true
	},
	riboflavin_mg: { 
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
	vitamin_b6_mg: { 
		type: Number,
		required: true
	},
	folate_mcg: { 
		type: Number,
		required: true
	},
	vitamin_b12_mcg: { 
		type: Number,
		required: true
	},
	choline_mg: { 
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
	sodium_mg: { 
		type: Number,
		required: true
	},
	zink_mg: { 
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Nutrition', nutritionSchema);