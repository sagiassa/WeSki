// client/src/App.js
import React, { useState } from 'react';
import search from './handleSerach'
import destinations from './destinations';

const App = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [hotels, setHotels] = useState([]);

  const handleSearch2 = async () => {
    setHotels([])
    const query = {
      ski_site: destination,
      from_date: startDate,
      to_date: endDate,
      group_size: parseInt(groupSize)
    }

    await search(query, setHotels);
    console.log("hotels", hotels)
  }

  return (
    <div className="App">
      <h1>Hotel Search</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSearch2(); }}>
        <label htmlFor="destination">Destination:</label>
        <select
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Select a destination</option>
          {destinations.map((dest) => (
            <option key={dest.id} value={dest.id}>
              {dest.name}
            </option>
          ))}
        </select>
        <br />
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <br />
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <br />
        <label>
          Group Size:
          <input type="number" value={groupSize} onChange={(e) => setGroupSize(e.target.value)} />
        </label>
        <br />
        <button type="submit">Search Hotels</button>
      </form>
      <div>
        <h2>
          Search Results</h2>
        <ul>
          {hotels?.length > 0 && hotels.map((hotel, index) => (
            <li key={index}>
              Hotel Name: {hotel.HotelName} | Hote price: {hotel.PricesInfo.AmountAfterTax} | beds: {hotel.HotelInfo.Beds}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
