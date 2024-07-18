import async from 'async'
import axios from 'axios'

const apiProviders = [
    {
        name: 'default',
        url: 'https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator'
    }
]

const search = async (query, setHotels) => {
    console.log("hey")
    const maxGroup = query.group_size + 2;
    console.log(maxGroup)
    while (query.group_size <= maxGroup) {
        await Promise.all(apiProviders.map(async (provider) => {
            console.log(`fetching ${provider.name}`);
            try {
                const { data: response } = await axios.post('http://localhost:5050/searchHotels', { apiUrl: provider.url, query });
                console.log("response", response);

                setHotels(prevHotels => [...prevHotels, ...response].sort((a, b) => a.PricesInfo.AmountAfterTax - b.PricesInfo.AmountAfterTax));
            } catch (error) {
                console.log(`Failed getting data from ${provider.name}`, error)
            }
        }
        ))
        query.group_size++;
    };
}

export default search
