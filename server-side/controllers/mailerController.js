const Client = require('../models/Client');
const UsersCampagne = require('../models/UsersCampagne');
const asyncHandler = require('express-async-handler');
const transporter = require('../config/mailer');

// @desc Create new note
// @route POST /sendmail
// @access Private
const handleUserContact = asyncHandler( async( req, res ) => {
	const {
		name, 
		lastname,
		email,
		cellphone,
		message
	} = req.body;

	if ( !name || !lastname || !email || !message ) {
        return res.status( 400 ).json({ message: 'Please fill all required field!' });
    }

	// Check for duplicate title
    const duplicate = await Client.findOne({ email }).lean().exec();
	if ( duplicate ) {
		console.log( 'Duplicate client' );
		const infoDuplicated = sendEmail( email, name ).then( result => console.log( result ));
		return res.json( `Dear client ${ name } thanks for you message, I going to contact you soon!` );
	} else {
		const client = await Client.create({ name, lastname, email, cellphone, message });
		const campagne = await UsersCampagne.create({ name, lastname, email });
		const infoClient = sendEmail( client.email, client.name ).then( result => console.log( result ));
		return res.json( `Hey ${ client.name } thanks for you message, I going to contact you soon!` );
	}
});

const sendEmail = ( email, name )  => {
	 return transporter.sendMail({
		from: '"Hector Cuba 👻" <hahc90developer@gmail.com>', // sender address
		to: email, // list of receivers
		subject: `Hello ${ name } it's a pleasure to contact you!`, // Subject line
		text: "Test Message", // plain text body
		html: "<b>Test Message</b>", // html body
	});
}



module.exports = {
    handleUserContact, 
	sendEmail
}