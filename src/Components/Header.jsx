
import React, { useState } from 'react';
import { destinations, groupSizeOptions } from '../data';
import moment from 'moment'
const Header = ({ onSubmit }) => {
    const [destination, setDestination] = useState('');
    const [groupSize, setGroupSize] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const query = {
            ski_site: destination,
            from_date: startDate,
            to_date: endDate,
            group_size: parseInt(groupSize)
        };
        console.log(destination)
        const destinationName = destinations.find(dest => dest.id === parseInt(destination)).name;

        onSubmit(query, destinationName);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
        setEndDate('')
    }

    const isFormValid = destination && groupSize && startDate && endDate;

    return (
        <div className="bg-white shadow-md p-4">
            <form onSubmit={handleSearchSubmit}>
                <div className="flex items-center flex-around">
                    <div className="flex items-center  w-28 mr-40" ><img src="https://res.cloudinary.com/ht4mr7djk/image/upload/f_auto,q_auto/weski_logo.png" alt="WeSki logo" className="sc-ktPPKK iJBfhh"></img></div>
                    <div className="flex items-center space-x-2">
                        <div className="relative flex-none">
                            <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.991 2a1 1 0 01.918.583l11 24A1 1 0 0129 28h-5.369l.272.57A1 1 0 0123 30H3a1 1 0 01-.903-1.43l10-21a1 1 0 011.806 0l.524 1.101L17.084 2.6A1 1 0 0117.99 2zm-2.426 9.06L22.679 26h4.763l-7.029-15.334-1.645 1.974a1 1 0 01-1.566-.038l-1.463-1.939-.174.398zm1.094-2.499l1.38 1.83 1.45-1.74-1.468-3.205-1.363 3.115zM21.416 28l-5.951-12.498-1.735 1.855a1 1 0 01-1.46 0l-1.735-1.855L4.584 28h16.832zM11.46 13.562L13 15.21l1.542-1.648L13 10.326l-1.54 3.236z" fill="#000"></path>
                            </svg>
                            <select
                                className="pl-10 pr-2 py-1 border border-gray-300 rounded"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                            >
                                <option value="" disabled>Select Destination</option>
                                {destinations.map((dest) => (
                                    <option key={dest.id} value={dest.id}>
                                        {dest.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="relative">
                        <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.949 5.96a3.755 3.755 0 100 7.51 3.755 3.755 0 000-7.51zM7.235 9.713a5.714 5.714 0 1111.428 0 5.714 5.714 0 01-11.428 0zm13.05-4.824a.98.98 0 011.193-.706 5.714 5.714 0 010 11.072.98.98 0 01-.486-1.898 3.755 3.755 0 000-7.276.98.98 0 01-.706-1.192zM4.175 19.878a5.714 5.714 0 014.04-1.674h9.47a5.715 5.715 0 015.714 5.714v2.368a.98.98 0 01-1.96 0v-2.368a3.755 3.755 0 00-3.754-3.755h-9.47a3.755 3.755 0 00-3.755 3.755v2.368a.98.98 0 01-1.959 0v-2.368c0-1.515.602-2.969 1.674-4.04zm20.847-.785a.98.98 0 011.193-.704 5.714 5.714 0 014.286 5.529v2.368a.98.98 0 01-1.96 0v-2.367a3.755 3.755 0 00-2.816-3.633.98.98 0 01-.703-1.193z" fill="#000"></path></svg>
                        <select
                            className="pl-10 pr-2 py-1 border border-gray-300 rounded"
                            value={groupSize}
                            onChange={(e) => setGroupSize(e.target.value)}
                        >
                            <option value="">Group Size</option>
                            {groupSizeOptions.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-none">
                        <input
                            type="date"
                            className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 py-1 px-4"
                            value={startDate}
                            min={moment().format('YYYY-MM-DD')}
                            onChange={(e) => handleStartDateChange(e)}
                        />
                        <span className="text-gray-400"> - </span>
                        <input
                            type="date"
                            className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 py-1 px-4"
                            value={endDate}
                            min={startDate ? moment(startDate).add(1, 'days').format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className={`ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
                        disabled={!isFormValid}
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Header;
