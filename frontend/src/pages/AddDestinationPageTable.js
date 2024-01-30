import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddDestinationPageTable = () => {

    const [placeName, setName]       = useState('');
    const [dateStart, setStartDate]         = useState('');
    const [dateEnd, setEndDate] = useState('');
    const [flightPrice, setPrice] = useState('');
    
    const redirect = useNavigate();

    const addDestination = async () => {
        const newDestination = { placeName, dateStart, dateEnd, flightPrice };
        const response = await fetch('/destinations', {
            method: 'post',
            body: JSON.stringify(newDestination),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Success! The travel destination has been added.`);
        } else {
            alert(`Error! The travel destination is unable to be added, status code = ${response.status}. Please check that all fields are completed.`);
        }
        redirect("/destinations");
    };


    return (
        <>
        <article>
            <h2>Add a Destination</h2>
            <p>To add a new destination, please fill out the required fields: the destination name, the start and end dates of the trip, and the flight ticket price. Then, click "Submit" when finished.</p>
            
            <table id="destinations">
                <caption>Which destination are you adding?</caption>
                <thead>
                    <tr>
                        <th>Destination</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Flight Price</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="placeName"></label>
                        <input
                            type="text"
                            placeholder="Destination Name"
                            value={placeName}
                            onChange={e => setName(e.target.value)} 
                            id="placeName" />
                    </td>

                    <td><label for="dateStart"></label>
                        <input
                            type="date"
                            placeholder="Start Date"
                            value={dateStart}
                            onChange={e => setStartDate(e.target.value)} 
                            id="dateStart" />
                    </td>

                    <td><label for="dateEnd"></label>
                        <input
                            type="date"
                            placeholder="End Date"
                            value={dateEnd}
                            onChange={e => setEndDate(e.target.value)} 
                            id="dateEnd" />
                    </td>

                    <td><label for="flightPrice"></label>
                        <input
                            type="number"
                            placeholder="Price"
                            value={flightPrice}
                            onChange={e => setPrice(e.target.value)} 
                            id="flightPrice" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={addDestination}
                            id="submit"
                        >Submit</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddDestinationPageTable;