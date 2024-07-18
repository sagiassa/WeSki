import React from 'react'
import StarsRating from './StarsRating'
const Card = ({ hotel, destination }) => {
  return (


    <div className="flex flex-row ml-20 mb-5 items-center h-60 bg-white border border-gray-200 rounded-2xl shadow md:flex-row md:max-w-4xl hover:bg-gray-100">

      <div className="w-2/5 h-full">
        <img className="object-cover h-full w-full rounded-l-lg"
          src={hotel.image} alt=""></img>

      </div>

      <div className="flex flex-col justify-between p-4 leading-normal w-3/5 h-full">
        <div className="mb-14">
          <div className="font-medium	">{hotel.name}</div>
          <div className="mt-2 mb-2"> <StarsRating rating={hotel.rating}></StarsRating></div>
          <div className="flex flex-row">
            <div className="mr-2"> <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" className="w-6 h-6"></img> </div><div className="text-base">{destination}</div>
          </div>
        </div>

        <hr />

        <div className="text-end"> <b>€{hotel.price}</b> /per person</div>
      </div>

    </div>

  )
}

export default Card