import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { BiSolidEditLocation, BiSolidTrash } from 'react-icons/bi';

function Destination({ destination, onEdit, onDelete }) {
    return (
        <tr>
            <td>{destination.placeName}</td>
            <td>{destination.dateStart.slice(0,10)}</td>
            <td>{destination.dateEnd.slice(0,10)}</td>
            <td>{destination.flightPrice}</td>
            <td><BiSolidTrash size={20} onClick={() => onDelete(destination._id)} /></td>
            <td><BiSolidEditLocation size={25} onClick={() => onEdit(destination)} /></td>
        </tr>
    );
}

export default Destination;