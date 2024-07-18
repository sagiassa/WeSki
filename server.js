const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.post('/searchHotels', async (req, res) => {
    try {
        const { query, apiUrl } = req.body;

        const requestBody = {
            query
        };

        const { data: { body: apiResponse } } = await axios.post(apiUrl, requestBody);
        const hotelsData = apiResponse.accommodations.map(hotel => {
            return {
                name: hotel.HotelName,
                price: hotel.PricesInfo.AmountAfterTax,
                image: hotel.HotelDescriptiveContent.Images[0].URL,
                rating: hotel.HotelInfo.Rating
            }
        })
        res.json(hotelsData);
    } catch (error) {
        console.error('Error fetching hotel data:', error);
        res.status(500).json({ error: 'Error fetching hotel data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
