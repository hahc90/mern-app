newsletterList = require('../models/Newsletter')
const asyncHandler = require( 'express-async-handler' );

// @desc Add new email to newsletter list
// @route POST /newsletter
// @access Private
addNewsletterListEmail = asyncHandler( async( req, res ) => {
	const { email } = req.body;
	console.log( email );
	if( !email ) {
		req.status( 400 ).json({ message:'Your email is required.' });
	}
	// Check for duplicates
	const duplicateNewsletteruser = await newsletterList.findOne( { email } ).lean().exec(); 	
	if( duplicateNewsletteruser ) {
		return res.status( 400 ).json( { message: 'You are already suscribed to my newsletter ;)' } );
	}

	const newsletterObject = { email: email };
	const newsletter = await newsletterList.create( newsletterObject );
	
	if( newsletter ) { 
		res.status( 201 ).json( { message: 'You have been successfully added to my newsletter list ;)' } );
	} else {
		res.status( 400 ).json( { message: 'Invalid email data received...' } );
	}
})

module.exports = {
    addNewsletterListEmail
}