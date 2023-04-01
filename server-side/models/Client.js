const mongoose = require( 'mongoose' );
const ClientSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	cellphone: {
		type: String,
		required: false
	},
	message: {
		type: String,
		required: true
	}, 
	suscribed: {
		type: Boolean,
		default: true
	}
});

module.exports = mongoose.model( 'Client', ClientSchema );
