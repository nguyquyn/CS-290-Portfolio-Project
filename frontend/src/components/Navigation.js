import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function TravelNav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/destinations">Travel Destinations</Link>
        <Link to="/topics">Topics</Link>
    </nav>
  );
}

export default TravelNav;
