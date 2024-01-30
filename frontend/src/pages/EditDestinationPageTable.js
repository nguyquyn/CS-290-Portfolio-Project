import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditDestinationPageTable = ({ destinationToEdit }) => {
 
    const [placeName, setName]       = useState(destinationToEdit.placeName);
    const [dateStart, setStartDate]         = useState(destinationToEdit.dateStart);
    const [dateEnd, setEndDate] = useState(destinationToEdit.dateEnd);
    const [flightPrice, setPrice] = useState(destinationToEdit.flightPrice);
    
    const redirect = useNavigate();

    const editDestination = async () => {
        const response = await fetch(`/destinations/${destinationToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                placeName: placeName,
                dateStart: dateStart, 
                dateEnd: dateEnd,
                flightPrice: flightPrice
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Success! The travel destination has been updated.`);
        } else {
            const errMessage = await response.json();
            alert(`Error! The travel destination is unable to be updated, status code = ${response.status}. Please look at the following error message: ${errMessage.Error}.`);
        }
        redirect("/destinations");
    }

    return (
        <>
        <article>
            <h2>Edit a Destination</h2>
            <p>To edit a destination, please fill out the desired changes. Then, click "Submit" when finished.</p>
            <table id="destinations">
                <caption>Which destination are you editing?</caption>
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
                            placeholder=""
                            value={placeName}
                            onChange={e => setName(e.target.value)} 
                            id="placeName" />
                    </td>

                    <td><label for="dateStart"></label>
                        <input
                            type="date"
                            placeholder=""
                            value={dateStart}
                            onChange={e => setStartDate(e.target.value)} 
                            id="dateStart" />
                    </td>

                    <td><label for="dateEnd"></label>
                        <input
                            type="date"
                            placeholder=""
                            value={dateEnd}
                            onChange={e => setEndDate(e.target.value)} 
                            id="dateEnd" />
                    </td>

                    <td><label for="flightPrice"></label>
                        <input
                            type="number"
                            placeholder=""
                            value={flightPrice}
                            onChange={e => setPrice(e.target.value)} 
                            id="flightPrice" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={editDestination}
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
export default EditDestinationPageTable;