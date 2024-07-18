import React, { useState } from 'react';
import search from './handleSerach';
import Card from './Components/Card';
import Header from './Components/Header'
import Headline from './Components/Headline'
const App = () => {
  const [hotels, setHotels] = useState([]);
  const [destinationName, setDestinationName] = useState('')
  const [searchedData, setSearchedData] = useState({})

  const handleSearchSubmit = async (query, destinationName) => {
    setHotels([]);
    setDestinationName(destinationName)
    setSearchedData({ ...query, destinationName })
    await search(query, setHotels);
  };

  return (
    <div className="bg-neutral-100">
      <Header onSubmit={handleSearchSubmit} />
      <div>
        {hotels.length === 0 ? '' : <Headline options={hotels} searchedData={searchedData}></Headline>}
        {hotels.map((hotel, index) => (
          <Card hotel={hotel} destination={destinationName}></Card>

        ))}
      </div>
    </div>
  );
};

export default App;