const mongoose = require( 'mongoose' );
const UsersCampagneModelSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	lastname:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	}
});

module.exports = mongoose.model( 'UsersCampagne', UsersCampagneModelSchema );