import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidEditLocation, BiSolidTrash, BiSolidLocationPlus } from 'react-icons/bi';

import DestinationList from '../components/DestinationList';

function DestinationsPage({ setDestination }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [destinations, setDestinations] = useState([]);

    // RETRIEVE the entire list of destinations
    const loadDestinations = async () => {
        const response = await fetch('/destinations');
        const destinations = await response.json();
        setDestinations(destinations);
    } 
    

    // UPDATE a single destination
    const onEditDestination = async destination => {
        setDestination(destination);
        redirect("/editDestination");
    }


    // DELETE a single destination  
    const onDeleteDestination = async _id => {
        const response = await fetch(`/destinations/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/destinations');
            const destinations = await getResponse.json();
            setDestinations(destinations);
        } else {
            console.error(`Failed to delete destination with ${_id} with status code = ${response.status}`)
        }
    }

    // LOAD all the destinations
    useEffect(() => {
        loadDestinations();
    }, []);

    // DISPLAY the destinations
    return (
        <>
            <article>
                <h2>List of Destinations</h2>
                <p>Please take a look at the list of travel destinations. To add a destination, please click on the <BiSolidLocationPlus size={25}></BiSolidLocationPlus> icon. To edit or delete a destination, please click on the corresponding <BiSolidTrash size={25}></BiSolidTrash> and <BiSolidEditLocation size={25}></BiSolidEditLocation> icons.</p>
                <DestinationList 
                    destinations={destinations} 
                    onEdit={onEditDestination} 
                    onDelete={onDeleteDestination} 
                />
            </article>
        </>
    );
}

export default DestinationsPage;