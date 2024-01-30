import React from 'react';
import Destination from './Destination';
import { Link } from 'react-router-dom';
import { BiSolidLocationPlus } from 'react-icons/bi';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function DestinationList({ destinations, onDelete, onEdit }) {
    return (
        <table id="destinations">
            <caption>Add, Edit, and Delete Destinations</caption>
            <thead>
                <tr>
                    <th>Destination</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Flight Price</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <Link to="/addDestination"><BiSolidLocationPlus  size={30}></BiSolidLocationPlus></Link>
                </tr>
            </thead>
            <tbody>
                {destinations.map((destination, i) => 
                    <Destination
                    destination={destination} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default DestinationList;
