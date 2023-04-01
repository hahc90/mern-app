const Client = require('../models/Client')
const asyncHandler = require('express-async-handler')

// @desc Get all Clients 
// @route GET /clients
// @access Private
const getAllClients = asyncHandler( async ( req, res ) => {
    // Get all notes from MongoDB
    const clients = await Client.find().lean()

    // If no notes 
    if ( !clients?.length ) {
        return res.status( 400 ).json({ message: 'No clients found' })
    }

    // Add username to each note before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    res.json( clients )
})

// @desc Get all notes 
// @route POTS /clients
// @access Private
const saveClient = asyncHandler( async ( req, res ) => {
	
})

module.exports = {
    getAllClients
}