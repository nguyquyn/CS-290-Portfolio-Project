// Models for the Travel Destination Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Error! The Travel Destinations database is unable to be connected to the MongoDB server. This may be due to an internal server error, such as a coding error. Please check the code again.'});
    } else  {
        console.log('Success! The connection to the MongoDB server is open, and the Travel Destinations database has been connected.');
    }
});

// SCHEMA: Define the collection's schema.
const destinationSchema = mongoose.Schema({
	placeName:    { type: String, required: true },
	dateStart:     { type: Date, required: true },
    dateEnd:     { type: Date, required: true },
	flightPrice: { type: Number, required: true, default: 0}
});

// Compile the model from the schema 
// by defining the collection name "destinations".
const destinations = mongoose.model('Destination', destinationSchema);


// CREATE model *****************************************
const createDestination = async (placeName, dateStart, dateEnd, flightPrice) => {
    const destination = new destinations({ 
        placeName: placeName, 
        dateStart: dateStart, 
        dateEnd: dateEnd,
        flightPrice: flightPrice
    });
    return destination.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveDestinations = async () => {
    const query = destinations.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveDestinationByID = async (_id) => {
    const query = destinations.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteDestinationById = async (_id) => {
    const result = await destinations.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateDestination = async (_id, placeName, dateStart, dateEnd, flightPrice) => {
    const result = await destinations.replaceOne({_id: _id }, {
        placeName: placeName, 
        dateStart: dateStart, 
        dateEnd: dateEnd,
        flightPrice: flightPrice
    });
    return { 
        _id: _id, 
        placeName: placeName, 
        dateStart: dateStart, 
        dateEnd: dateEnd,
        flightPrice: flightPrice
    }
}

// EXPORT the variables for use in the controller file.
export { createDestination, retrieveDestinations, retrieveDestinationByID, updateDestination, deleteDestinationById }