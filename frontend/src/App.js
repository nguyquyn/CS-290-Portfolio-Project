// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import TravelNav from './components/Navigation.js';
import './App.css';

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import HomePage from './pages/HomePage.js';
import DestinationsPage from './pages/DestinationPage.js';
import TopicsPage from './pages/TopicsPage.js';
import AddDestinationPageTable from './pages/AddDestinationPageTable.js';
import EditDestinationPageTable from './pages/EditDestinationPageTable.js';

// Define the function that renders the content in Routes, using State.
function App() {

  const [destination, setDestinationToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Quynh Nguyen</h1>
            <img src="./android-chrome-192x192.png" alt="Favicon"/>
          </header>

          <TravelNav/>

          <main>
            <section>
                <Routes> 
                    <Route path="/" exact element={<HomePage/>} />
                    <Route path="/destinations" element={<DestinationsPage params setDestination={setDestinationToEdit} />} />
                    <Route path="/addDestination" element={<AddDestinationPageTable />} />
                    <Route path="/editDestination" element={<EditDestinationPageTable params destinationToEdit={destination} />} />
                    <Route path="/topics" element={<TopicsPage/>} /> 
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Quynh Nguyen</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;