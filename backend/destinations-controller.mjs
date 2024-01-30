// Controllers for the Travel Destination Collection

import 'dotenv/config';
import express from 'express';
import * as destinations from './destinations-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/destinations', (req,res) => { 
    destinations.createDestination(
        req.body.placeName, 
        req.body.dateStart, 
        req.body.dateEnd,
        req.body.flightPrice
        )
        .then(destination => {
            res.status(201).json(destination);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Error! The destination is unable to be created in the database. The server is unable to process the request because of a client error. Please double-check all parameters.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/destinations', (req, res) => {
    destinations.retrieveDestinations()
        .then(destination => { 
            if (destination !== null) {
                res.json(destination);
            } else {
                res.status(404).json({ Error: 'Error! The requested destination is unable to be retrieved because it cannot be found in the database.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Error! The requested destination is unable to be retrieved.' });
        });
});


// RETRIEVE by ID controller
app.get('/destinations/:_id', (req, res) => {
    destinations.retrieveDestinationByID(req.params._id)
    .then(destination => { 
        if (destination !== null) {
            res.json(destination);
        } else {
            res.status(404).json({ Error: 'Error! The requested destination is unable to be retrieved because the ID cannot be found in the database. Please double-check that the destination exists.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Error! The requested destination is unable to be retrieved by ID. Please double-check that the ID is correct.' });
    });

});


// UPDATE controller ************************************
app.put('/destinations/:_id', (req, res) => {
    destinations.updateDestination(
        req.params._id, 
        req.body.placeName, 
        req.body.dateStart, 
        req.body.dateEnd,
        req.body.flightPrice
    )
    .then(destination => {
        res.json(destination);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Error! The requested destination is unable to be updated. Please double-check that the ID is correct.' });
    });
});


// DELETE Controller ******************************
app.delete('/destinations/:_id', (req, res) => {
    destinations.deleteDestinationById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'Success! The requested destination by ID has been deleted.' });
            } else {
                res.status(404).json({ Error: 'Error! The requested destination is unable to be deleted because it cannot be found by the ID. Please double-check that the destination exists.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Error! The requested destination is unable to be deleted by ID. Please double-check that the ID is correct.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});