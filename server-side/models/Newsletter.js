const mongoose =  require('mongoose')

const newsletterSchema = mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	suscribed: {
		type: Boolean,
		default: true 
	}
})

module.exports = mongoose.model( 'Newsletter', newsletterSchema	)