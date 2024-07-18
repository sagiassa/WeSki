import axios from 'axios'

// We can easaly add more providers here and the code base remains the same. 
// I added name because it can allow us monitor the calls better
const apiProviders = [
    {
        name: 'default',
        url: 'https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator'
    }
]

const search = async (query, setHotels) => {
    const maxGroup = query.group_size + 2;
    while (query.group_size <= maxGroup) {
        await Promise.all(apiProviders.map(async (provider) => {
            console.log(`fetching ${provider.name}`);
            try {
                const { data: response } = await axios.post('http://localhost:5050/searchHotels', { apiUrl: provider.url, query });
                setHotels(prevHotels => [...prevHotels, ...response].sort((a, b) => a.price - b.price));
            } catch (error) {
                console.log(`Failed getting data from ${provider.name}`, error)
            }
        }
        ))
        query.group_size++;
    };
}

export default search
